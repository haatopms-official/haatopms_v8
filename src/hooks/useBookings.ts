import { useCallback, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Booking, generateSampleBookings } from '@/types/hotel';
import { differenceInCalendarDays, parseISO, startOfDay } from 'date-fns';
import { toast } from 'sonner';
import { useI18n } from './useI18n';
import { listBookings, saveBookings } from '@/lib/api/bookings.functions';
import { getToken } from '@/lib/session-token';

function bookingSignature(b: Booking): string {
  return [b.roomNumber, b.bedIndex ?? 'room', b.checkIn, b.checkOut, b.status, (b.guestName || '').trim().toLowerCase()].join('|');
}
function isLegacySampleBooking(b: Booking): boolean { return /^b\d+$/.test(String(b.id)); }

function normalizeBookings(input: unknown): Booking[] {
  if (!Array.isArray(input)) return [];
  const byId = new Map<string, Booking>();
  for (const item of input) {
    if (!item || typeof item !== 'object') continue;
    const b = item as Booking;
    if (!b.id || !b.roomNumber || !b.checkIn || !b.checkOut || !b.status) continue;
    if (isLegacySampleBooking(b)) continue;
    byId.set(String(b.id), b);
  }
  const bySig = new Map<string, Booking>();
  for (const b of byId.values()) bySig.set(bookingSignature(b), b);
  return applyAutoCheckout(Array.from(bySig.values()));
}

function bookingHalfSpan(b: Booking): [number, number] {
  const base = startOfDay(parseISO('2000-01-01'));
  const inDay = differenceInCalendarDays(parseISO(b.checkIn), base);
  const outDay = differenceInCalendarDays(parseISO(b.checkOut), base);
  return [2 * inDay + 1 - (b.checkInHalfDay ? 1 : 0), 2 * outDay + 1 + (b.checkOutHalfDay ? 1 : 0)];
}

function bookingsConflict(a: Booking, b: Booking): boolean {
  if (a.id === b.id) return false;
  if (a.roomNumber !== b.roomNumber) return false;
  const roomWide = a.status === 'maintenance' || b.status === 'maintenance' || a.bedIndex === undefined || b.bedIndex === undefined;
  if (!roomWide) {
    const aBeds = new Set<number>([a.bedIndex as number, ...(a.additionalBeds ?? [])]);
    const bBeds = new Set<number>([b.bedIndex as number, ...(b.additionalBeds ?? [])]);
    let overlap = false;
    for (const bed of aBeds) if (bBeds.has(bed)) { overlap = true; break; }
    if (!overlap) return false;
  }
  const [aS, aE] = bookingHalfSpan(a);
  const [bS, bE] = bookingHalfSpan(b);
  return aS < bE && bS < aE;
}

function findConflict(list: Booking[], candidate: Booking) { return list.find((b) => bookingsConflict(b, candidate)); }

function applyAutoCheckout(list: Booking[]): Booking[] {
  // Auto-checkout is intentionally disabled.
  return list;
}

export function useBookings() {
  const { t } = useI18n();
  const qc = useQueryClient();

  // ---- replaces: const { data, setData, ready } = useSharedState<Booking[]>('bookings', []); ----
  const { data: rawData, isSuccess: ready } = useQuery({
    queryKey: ['bookings'],
    queryFn: () => listBookings({ data: { token: getToken() } }),
    refetchInterval: 4000,
  });
  const data: Booking[] = Array.isArray(rawData) ? rawData : [];

  const { mutateAsync: persist } = useMutation({
    mutationFn: (next: Booking[]) => saveBookings({ data: { token: getToken(), bookings: next } }),
    onMutate: async (next) => {
      await qc.cancelQueries({ queryKey: ['bookings'] });
      qc.setQueryData(['bookings'], next); // optimistic UI update
    },
    onError: () => {
      toast.error('Failed to save — retrying next sync');
      qc.invalidateQueries({ queryKey: ['bookings'] }); // roll back to server truth
    },
  });

  // setData supports both a value and an updater fn, exactly like the old useSharedState API
  const setData = useCallback((updater: Booking[] | ((prev: Booking[]) => Booking[])) => {
    const next = typeof updater === 'function' ? (updater as (p: Booking[]) => Booking[])(data) : updater;
    void persist(next);
  }, [data, persist]);
  // ---- end replacement ----

  // Seed sample bookings into the DB once, when it's empty
  useEffect(() => {
    if (!ready) return;
    if (Array.isArray(data) && data.length === 0) {
      const seed = normalizeBookings(generateSampleBookings());
      if (seed.length) setData(seed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  // Daily auto-checkout
  useEffect(() => {
    const tick = () => setData((prev) => applyAutoCheckout(Array.isArray(prev) ? prev : []));
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [setData]);

  const bookings = Array.isArray(data) ? normalizeBookings(data) : [];

  const addBooking = useCallback((booking: Booking) => {
    let rejected = false;
    const list = Array.isArray(data) ? data : [];
    if (findConflict(list, booking)) { rejected = true; toast.error(t('overlapError')); return false; }
    setData([...list, booking]);
    return !rejected;
  }, [data, setData, t]);

  const removeBooking = useCallback((id: string) => {
    setData((prev) => (Array.isArray(prev) ? prev.filter((b) => b.id !== id) : []));
  }, [setData]);

  const updateBooking = useCallback((id: string, updates: Partial<Booking>) => {
    let rejected = false;
    const list = Array.isArray(data) ? data : [];
    const target = list.find((b) => b.id === id);
    if (!target) return false;
    const candidate: Booking = { ...target, ...updates };
    if (findConflict(list, candidate)) { rejected = true; toast.error(t('overlapError')); return false; }
    setData(list.map((b) => (b.id === id ? candidate : b)));
    return !rejected;
  }, [data, setData, t]);

  return { bookings, addBooking, removeBooking, updateBooking };
}
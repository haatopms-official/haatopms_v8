import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getHotelDetails, setHotelDetails } from '@/lib/api/hotel-details.functions';
import { getToken } from '@/lib/session-token';

export interface HotelDetails {
  logo: string; hotelName: string; companyName: string; inn: string;
  raschetnyiSchet: string; telephone: string; site: string; email: string;
}
const DEFAULTS: HotelDetails = { logo: '', hotelName: '', companyName: '', inn: '', raschetnyiSchet: '', telephone: '', site: '', email: '' };

interface Ctx { details: HotelDetails; setDetails: (patch: Partial<HotelDetails>) => void; }
const HotelDetailsContext = createContext<Ctx | null>(null);

export function HotelDetailsProvider({ children }: { children: ReactNode }) {
  const qc = useQueryClient();
  const { data: details = DEFAULTS } = useQuery({
    queryKey: ['hotel-details'],
    queryFn: () => getHotelDetails({ data: { token: getToken() } }),
    refetchInterval: 15000,
  });
  const { mutate: persist } = useMutation({
    mutationFn: (next: HotelDetails) => setHotelDetails({ data: { token: getToken(), details: next } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['hotel-details'] }),
  });
  const setDetails = (patch: Partial<HotelDetails>) => persist({ ...details, ...patch });
  const value = useMemo(() => ({ details, setDetails }), [details]);
  return <HotelDetailsContext.Provider value={value}>{children}</HotelDetailsContext.Provider>;
}

export function useHotelDetails() {
  const ctx = useContext(HotelDetailsContext);
  if (!ctx) throw new Error('useHotelDetails must be used within HotelDetailsProvider');
  return ctx;
}
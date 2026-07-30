// src/pages/BackupRestore.tsx (new)
import { useState } from "react";
import { createBackup, downloadBackup, restoreBackupById, restoreBackupFromFile } from "@/lib/api/backup.functions";
import { getToken } from "@/lib/session-token";
import { toast } from "sonner";

export default function BackupRestore() {
  const [label, setLabel] = useState("");
  const [backupId, setBackupId] = useState("");
  const [busy, setBusy] = useState(false);

  async function onCreate() {
    setBusy(true);
    try {
      const { backupId } = await createBackup({ data: { token: getToken(), label: label || undefined } });
      toast.success(`Backup created: ${backupId}`);
    } catch (e: any) { toast.error(e.message); } finally { setBusy(false); }
  }

  async function onDownload() {
    if (!backupId) return toast.error("Enter a backup ID");
    setBusy(true);
    try {
      const row = await downloadBackup({ data: { token: getToken(), backupId } });
      const blob = new Blob([JSON.stringify(row, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = `${backupId}.json`; a.click();
      URL.revokeObjectURL(url);
    } catch (e: any) { toast.error(e.message); } finally { setBusy(false); }
  }

  async function onRestoreById() {
    if (!backupId) return toast.error("Enter a backup ID");
    if (!confirm(`This will WIPE current bookings/guests/room state/hotel details and replace them with backup ${backupId}. Continue?`)) return;
    setBusy(true);
    try {
      await restoreBackupById({ data: { token: getToken(), backupId } });
      toast.success("Restore complete");
    } catch (e: any) { toast.error(e.message); } finally { setBusy(false); }
  }

  async function onRestoreFile(file: File) {
    if (!confirm("This will WIPE current data and replace it with the uploaded file. Continue?")) return;
    setBusy(true);
    try {
      const snapshot = JSON.parse(await file.text());
      await restoreBackupFromFile({ data: { token: getToken(), snapshot } });
      toast.success("Restore from file complete");
    } catch (e: any) { toast.error(e.message); } finally { setBusy(false); }
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-bold">Backup & Restore</h1>
      <section className="space-y-2">
        <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Label (optional)" className="border rounded px-3 py-2 w-full" />
        <button disabled={busy} onClick={onCreate} className="bg-primary text-primary-foreground rounded px-4 py-2">Create backup</button>
      </section>
      <section className="space-y-2">
        <input value={backupId} onChange={(e) => setBackupId(e.target.value)} placeholder="bkp_xxxxxxxxxxxx" className="border rounded px-3 py-2 w-full" />
        <div className="flex gap-2">
          <button disabled={busy} onClick={onDownload} className="border rounded px-4 py-2">Download</button>
          <button disabled={busy} onClick={onRestoreById} className="border border-destructive text-destructive rounded px-4 py-2">Restore by ID</button>
        </div>
      </section>
      <section>
        <input type="file" accept="application/json" onChange={(e) => e.target.files?.[0] && onRestoreFile(e.target.files[0])} />
      </section>
    </div>
  );
}
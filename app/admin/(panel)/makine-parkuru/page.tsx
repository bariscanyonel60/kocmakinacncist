import { MachinesAdmin } from "@/components/admin/MachinesAdmin";
import { admin } from "@/lib/admin-ui";
import { getMachines } from "@/lib/machines-content";

export const instant = false;

export default async function AdminMachinesPage() {
  const items = await getMachines();

  return (
    <div className="space-y-6">
      <div>
        <h1 className={admin.pageTitle}>Makine parkuru</h1>
        <p className={admin.pageLead}>
          Parkur kartlarını ekleyin veya düzenleyin. Doğrulanmamış kapasite değerlerini boş bırakın.
        </p>
      </div>
      <MachinesAdmin initialItems={items} />
    </div>
  );
}

import { ServicesAdmin } from "@/components/admin/ServicesAdmin";
import { admin } from "@/lib/admin-ui";
import { getServiceAdminItems } from "@/lib/services-content";

export const instant = false;

export default async function AdminServicesPage() {
  const items = await getServiceAdminItems();

  return (
    <div className="space-y-6">
      <div>
        <h1 className={admin.pageTitle}>Hizmetlerimiz</h1>
        <p className={admin.pageLead}>
          Liste kartı, SEO ve giriş metinlerini yönetin. Yayından kaldırılan hizmet sitede görünmez.
        </p>
      </div>
      <ServicesAdmin initialItems={items} />
    </div>
  );
}

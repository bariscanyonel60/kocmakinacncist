import { ContentAdmin } from "@/components/admin/ContentAdmin";
import { admin } from "@/lib/admin-ui";
import { getSiteContent } from "@/lib/site-content";

export const instant = false;

export default async function AdminContentPage() {
  const content = await getSiteContent();

  return (
    <div className="space-y-6">
      <div>
        <h1 className={admin.pageTitle}>İçerik</h1>
        <p className={admin.pageLead}>Logo altındaki ticari unvan ve footer metnini buradan güncelleyin.</p>
      </div>
      <ContentAdmin initial={content} />
    </div>
  );
}

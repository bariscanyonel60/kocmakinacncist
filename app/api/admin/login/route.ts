import { cookies } from "next/headers";
import {
  ADMIN_SESSION_COOKIE,
  adminAuthConfigured,
  adminSessionCookieOptions,
  createAdminSessionToken,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!adminAuthConfigured()) {
    return Response.json(
      { ok: false, error: "NOT_CONFIGURED", message: "ADMIN_PASSWORD ve ADMIN_SESSION_SECRET tanımlı değil." },
      { status: 501 },
    );
  }

  let body: { password?: string };
  try {
    body = (await request.json()) as { password?: string };
  } catch {
    return Response.json({ ok: false, error: "INVALID_JSON" }, { status: 400 });
  }

  const password = typeof body.password === "string" ? body.password : "";
  if (!verifyAdminPassword(password)) {
    return Response.json({ ok: false, error: "INVALID_CREDENTIALS", message: "Şifre hatalı." }, { status: 401 });
  }

  const jar = await cookies();
  jar.set(ADMIN_SESSION_COOKIE, createAdminSessionToken(), adminSessionCookieOptions());
  return Response.json({ ok: true });
}

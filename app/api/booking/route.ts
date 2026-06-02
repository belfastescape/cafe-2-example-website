import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();
  const name = String(data.get("name") || "");
  const email = String(data.get("email") || "");
  const date = String(data.get("date") || "");
  const message = String(data.get("message") || "");

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
  }

  // TODO: wire to an email provider (Resend, Formspree, etc.)
  console.log("New booking:", { name, email, date, message });

  return NextResponse.json({ ok: true });
}

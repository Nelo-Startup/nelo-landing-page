import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, phone } = await request.json();

  if (typeof name !== "string" || !name.trim() || typeof phone !== "string" || !phone.trim()) {
    return NextResponse.json({ error: "Name and phone number are required." }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ error: "Server is not configured." }, { status: 500 });
  }

  const res = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Could not join the waitlist." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

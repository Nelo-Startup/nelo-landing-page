"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";

export async function sendContactMessage(
  name: string,
  email: string,
  message: string,
) {
  const { error } = await supabaseAdmin
    .from("contact_messages")
    .insert({ name, email, message });

  return { error: error ? error.message : null };
}

"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";

export async function joinWaitlist(name: string, phone: string) {
  const { error } = await supabaseAdmin
    .from("waitlist")
    .insert({ name, phone });

  return { error: error ? error.message : null };
}

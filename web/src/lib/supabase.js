import { createClient } from "@supabase/supabase-js";

// Public, browser-safe values (anon key). Set these in web/.env (local) and in
// Vercel project env (production). When absent, the app falls back to sample
// data so it still renders.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isConfigured = Boolean(url && anonKey);
export const supabase = isConfigured ? createClient(url, anonKey) : null;

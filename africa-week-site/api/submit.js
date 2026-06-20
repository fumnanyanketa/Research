import { createClient } from '@supabase/supabase-js';

// Receives idea submissions from ideas.html and stores them in Supabase.
// Secrets come from Vercel environment variables, never from the repo.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { name, phone, email, ideas, website } = req.body || {};

  // Honeypot: real people leave this empty. Bots fill it. Pretend success.
  if (website) return res.status(200).json({ ok: true });

  if (!name || !ideas) {
    return res.status(400).json({ error: 'Name and ideas are required.' });
  }
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email.' });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return res.status(500).json({ error: 'Server is not configured yet.' });
  }

  const supabase = createClient(url, key);
  const { error } = await supabase.from('ideas').insert({
    name: String(name).slice(0, 200),
    phone: phone ? String(phone).slice(0, 50) : null,
    email: email ? String(email).slice(0, 200) : null,
    ideas: String(ideas).slice(0, 5000)
  });

  if (error) {
    console.error('Supabase insert failed:', error.message);
    return res.status(500).json({ error: 'Could not save right now. Please try again.' });
  }

  return res.status(200).json({ ok: true });
}

import { neon } from '@neondatabase/serverless';

// Receives idea submissions from ideas.html and stores them in Neon (Postgres).
// The connection string comes from a Vercel environment variable.
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

  const conn = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!conn) {
    return res.status(500).json({ error: 'Server is not configured yet.' });
  }

  try {
    const sql = neon(conn);
    await sql`
      insert into ideas (name, phone, email, ideas)
      values (
        ${String(name).slice(0, 200)},
        ${phone ? String(phone).slice(0, 50) : null},
        ${email ? String(email).slice(0, 200) : null},
        ${String(ideas).slice(0, 5000)}
      )
    `;
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Insert failed:', err.message);
    return res.status(500).json({ error: 'Could not save right now. Please try again.' });
  }
}

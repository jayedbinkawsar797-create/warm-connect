import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const supabaseModule = await import('./_supabase');
    const emailModule = await import('./_email');
    return res.status(200).json({ success: true, supabase: !!supabaseModule, email: !!emailModule });
  } catch (e: any) {
    return res.status(500).json({ error: String(e), stack: e?.stack });
  }
}

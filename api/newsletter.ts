import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabase } from './_supabase';
import { resend, FROM_EMAIL, NOTIFICATION_EMAIL, cors } from './_email';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body || {};

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const { error: dbError } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }]);

  if (dbError) {
    // Handle duplicate email gracefully
    if (dbError.code === '23505') {
      return res.status(200).json({ success: true, message: 'Already subscribed' });
    }
    console.error('DB error:', dbError);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFICATION_EMAIL,
        subject: `📧 New Newsletter Subscriber — ${email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1a1a1a; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #e63946; margin: 0; font-size: 24px;">New Newsletter Subscriber</h1>
              <p style="color: #888; margin: 4px 0 0;">Zebra Golf Cart Website</p>
            </div>
            <div style="background: #2a2a2a; padding: 24px; border-radius: 0 0 8px 8px;">
              <p style="color: #fff; font-size: 16px;"><strong>${email}</strong> has subscribed to the newsletter.</p>
              <p style="color: #888; font-size: 13px;">Subscribed at: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
    }
  }

  return res.status(200).json({ success: true });
}

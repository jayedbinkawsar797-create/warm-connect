import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSupabase } from './_supabase.js';
import { resend, FROM_EMAIL, NOTIFICATION_EMAIL, cors } from './_email.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Save to database
  const { error: dbError } = await getSupabase()
    .from('contacts')
    .insert([{ name, email, phone, subject, message }]);

  if (dbError) {
    console.error('DB error:', dbError);
    return res.status(500).json({ error: 'Failed to save submission' });
  }

  // Send email notification
  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFICATION_EMAIL,
        subject: `🔔 New Contact Message — ${subject} from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1a1a1a; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #e63946; margin: 0; font-size: 24px;">New Contact Message</h1>
              <p style="color: #888; margin: 4px 0 0;">Zebra Golf Cart Website</p>
            </div>
            <div style="background: #2a2a2a; padding: 24px; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px; width: 120px;">Name</td><td style="color: #fff; padding: 8px 0; font-weight: bold;">${name}</td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Email</td><td style="color: #fff; padding: 8px 0;"><a href="mailto:${email}" style="color: #e63946;">${email}</a></td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Phone</td><td style="color: #fff; padding: 8px 0;"><a href="tel:${phone}" style="color: #e63946;">${phone}</a></td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Subject</td><td style="color: #fff; padding: 8px 0;">${subject}</td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px; vertical-align: top;">Message</td><td style="color: #fff; padding: 8px 0;">${message}</td></tr>
              </table>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #444;">
                <a href="mailto:${email}" style="background: #e63946; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Reply to ${name}</a>
              </div>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the request if email fails
    }
  }

  return res.status(200).json({ success: true });
}

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabase } from './_supabase';
import { resend, FROM_EMAIL, NOTIFICATION_EMAIL, cors } from './_email';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { firstName, lastName, email, phone, location, date, timeSlot, model, message } = req.body || {};

  if (!firstName || !lastName || !email || !phone || !date || !timeSlot || !model) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const { error: dbError } = await supabase
    .from('demo_bookings')
    .insert([{
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      location: location || 'florida',
      booking_date: date,
      time_slot: timeSlot,
      model,
      message: message || '',
    }]);

  if (dbError) {
    console.error('DB error:', dbError);
    return res.status(500).json({ error: 'Failed to save booking' });
  }

  if (resend) {
    try {
      const formattedDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });

      await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFICATION_EMAIL,
        subject: `📅 New Demo Booking — ${formattedDate} at ${timeSlot} from ${firstName} ${lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1a1a1a; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #e63946; margin: 0; font-size: 24px;">New Demo Booking</h1>
              <p style="color: #888; margin: 4px 0 0;">Zebra Golf Cart Website</p>
            </div>
            <div style="background: #2a2a2a; padding: 24px; border-radius: 0 0 8px 8px;">
              <div style="background: #1a1a1a; border: 1px solid #e63946; border-radius: 8px; padding: 16px; margin-bottom: 24px; text-align: center;">
                <p style="color: #e63946; font-weight: bold; font-size: 18px; margin: 0;">📅 ${formattedDate}</p>
                <p style="color: #fff; font-size: 16px; margin: 4px 0 0;">🕐 ${timeSlot} — Florida Showroom</p>
              </div>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px; width: 120px;">Name</td><td style="color: #fff; padding: 8px 0; font-weight: bold;">${firstName} ${lastName}</td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Email</td><td style="color: #fff; padding: 8px 0;"><a href="mailto:${email}" style="color: #e63946;">${email}</a></td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Phone</td><td style="color: #fff; padding: 8px 0;"><a href="tel:${phone}" style="color: #e63946;">${phone}</a></td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Model</td><td style="color: #fff; padding: 8px 0; text-transform: capitalize;">${model.replace(/-/g, ' ')}</td></tr>
                ${message ? `<tr><td style="color: #888; padding: 8px 0; font-size: 13px; vertical-align: top;">Notes</td><td style="color: #fff; padding: 8px 0;">${message}</td></tr>` : ''}
              </table>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #444;">
                <a href="mailto:${email}" style="background: #e63946; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Reply to ${firstName}</a>
              </div>
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

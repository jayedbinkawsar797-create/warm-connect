import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabase } from './_supabase';
import { resend, FROM_EMAIL, NOTIFICATION_EMAIL, cors } from './_email';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    businessName, contactName, email, phone, website,
    state, city, businessType, yearsInBusiness, fleetSize, message
  } = req.body || {};

  if (!businessName || !contactName || !email || !phone || !state || !city) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const { error: dbError } = await supabase
    .from('dealer_applications')
    .insert([{
      business_name: businessName,
      contact_name: contactName,
      email,
      phone,
      website: website || '',
      state,
      city,
      business_type: businessType,
      years_in_business: yearsInBusiness,
      fleet_size: fleetSize,
      message: message || '',
    }]);

  if (dbError) {
    console.error('DB error:', dbError);
    return res.status(500).json({ error: 'Failed to save application' });
  }

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFICATION_EMAIL,
        subject: `🏢 New Dealer Application — ${businessName} from ${city}, ${state}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1a1a1a; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #d4a017; margin: 0; font-size: 24px;">New Dealer Application</h1>
              <p style="color: #888; margin: 4px 0 0;">Zebra Golf Cart B2B Partnerships</p>
            </div>
            <div style="background: #2a2a2a; padding: 24px; border-radius: 0 0 8px 8px;">
              <h2 style="color: #ccc; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px;">Business Details</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px; width: 140px;">Business Name</td><td style="color: #fff; padding: 8px 0; font-weight: bold;">${businessName}</td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Contact</td><td style="color: #fff; padding: 8px 0;">${contactName}</td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Email</td><td style="color: #fff; padding: 8px 0;"><a href="mailto:${email}" style="color: #d4a017;">${email}</a></td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Phone</td><td style="color: #fff; padding: 8px 0;"><a href="tel:${phone}" style="color: #d4a017;">${phone}</a></td></tr>
                ${website ? `<tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Website</td><td style="color: #fff; padding: 8px 0;"><a href="${website}" style="color: #d4a017;">${website}</a></td></tr>` : ''}
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Location</td><td style="color: #fff; padding: 8px 0;">${city}, ${state}</td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Business Type</td><td style="color: #fff; padding: 8px 0; text-transform: capitalize;">${businessType}</td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Years in Business</td><td style="color: #fff; padding: 8px 0;">${yearsInBusiness}</td></tr>
                <tr><td style="color: #888; padding: 8px 0; font-size: 13px;">Expected Fleet</td><td style="color: #fff; padding: 8px 0;">${fleetSize} units</td></tr>
                ${message ? `<tr><td style="color: #888; padding: 8px 0; font-size: 13px; vertical-align: top;">Notes</td><td style="color: #fff; padding: 8px 0;">${message}</td></tr>` : ''}
              </table>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #444;">
                <a href="mailto:${email}" style="background: #d4a017; color: #1a1a1a; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Reply to ${contactName}</a>
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

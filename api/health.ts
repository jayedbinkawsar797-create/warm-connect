export default async function handler(req: any, res: any) {
  const envCheck = {
    hasSupabaseUrl: !!process.env.SUPABASE_URL,
    hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasNotificationEmail: !!process.env.NOTIFICATION_EMAIL,
    node: process.version,
  };
  return res.status(200).json(envCheck);
}

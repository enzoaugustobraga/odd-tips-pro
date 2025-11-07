export const allowedEmails = (
  process.env.NEXT_PUBLIC_AUTHORIZED_EMAILS?.split(",").map(email => email.trim()) || []
);

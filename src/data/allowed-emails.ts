export const allowedEmails = process.env.AUTHORIZED_EMAILS
  ?.split(",")
  .map(email => email.trim()) || [];

console.log("Emails autorizados:", allowedEmails);

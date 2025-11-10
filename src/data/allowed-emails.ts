export const allowedEmails = (
  import.meta.env.VITE_ALLOWED_EMAILS?.split(",").map((email: string) => email.trim()) || []
);

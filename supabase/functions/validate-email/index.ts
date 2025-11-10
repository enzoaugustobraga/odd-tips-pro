import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ValidateEmailRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: ValidateEmailRequest = await req.json();
    
    console.log("Validating email:", email);

    // Get allowed emails from environment variable
    const allowedEmailsStr = Deno.env.get("ALLOWED_EMAILS");
    
    if (!allowedEmailsStr) {
      console.error("ALLOWED_EMAILS environment variable not set");
      return new Response(
        JSON.stringify({ valid: false, error: "Configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Parse and trim allowed emails
    const allowedEmails = allowedEmailsStr
      .split(",")
      .map((e) => e.trim().toLowerCase());

    console.log("Checking against allowed emails (count):", allowedEmails.length);

    // Check if email is in allowed list (case-insensitive)
    const isValid = allowedEmails.includes(email.toLowerCase());

    console.log("Email validation result:", isValid);

    return new Response(
      JSON.stringify({ valid: isValid }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in validate-email function:", error);
    return new Response(
      JSON.stringify({ valid: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

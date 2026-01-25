import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["thecodermikel@gmail.com"],
      subject: `New Portfolio Message from ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #111; line-height: 1.6;">
          <h2 style="margin-bottom: 8px;">New Portfolio Contact</h2>
          <p style="color: #555; margin-top: 0;">
            Someone just contacted you from your portfolio website.
          </p>

          <hr style="margin: 24px 0;" />

          <h3>Sender Info</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>

          <hr style="margin: 24px 0;" />

          <h3>Message</h3>
          <p style="background: #f7f7f7; padding: 12px; border-radius: 6px;">
            ${message}
          </p>

          <hr style="margin: 32px 0;" />

          <p style="font-size: 12px; color: #888;">
            Sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    console.log("EMAIL SENT:", result);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

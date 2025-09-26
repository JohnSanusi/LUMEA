import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json()

    // In a real application, you would use a service like SendGrid, Nodemailer, or similar
    // For now, we'll simulate the email sending and log the data

    const emailData = {
      to: "admin@lumea.com", // Replace with actual admin email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Sent from Lumea Contact Form</em></p>
      `,
    }

    // Log the email data (in production, replace this with actual email sending)
    console.log("[v0] Contact form submission:", emailData)

    // Here you would integrate with your email service:
    // await sendEmail(emailData)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}

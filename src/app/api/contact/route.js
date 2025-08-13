import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// API Route handler for contact form submissions
export async function POST(request) {
  try {
    // Parse the request body
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Create nodemailer transporter
    // Configure these environment variables in your .env.local file
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to other services
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Alternative configuration for custom SMTP (comment out the above and use this if needed)
    /*
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    */

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER, // Recipient email
      subject: `Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Contact Details</h3>
            <p><strong>Name:</strong> ${name || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="margin-top: 0; color: #555;">Message</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 5px; font-size: 12px; color: #666;">
            <p style="margin: 0;">This email was sent from your website's contact form on ${new Date().toLocaleString()}.</p>
            <p style="margin: 5px 0 0 0;">Reply directly to this email to respond to ${name || 'the sender'}.</p>
          </div>
        </div>
      `,
      // Also set the reply-to address to the form submitter
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending failed:', error);
    
    // Return error response
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit contact form.' },
    { status: 405 }
  );
}

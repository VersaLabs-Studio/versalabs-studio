import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, enterprise, projectType, budget, scope, referral } = body;

    // Validate inputs
    if (!name || !email || !scope) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter with Yegara SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.versalabs-studio.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Send FROM the authenticated user
      replyTo: email,
      to: process.env.SMTP_USER, // Send TO the authenticated user (or another inbox)
      subject: `New Project Inquiry: ${projectType || 'General'} - ${name} (${enterprise || 'No Company'})`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Enterprise/Company: ${enterprise || 'N/A'}
Project Type: ${projectType || 'N/A'}
Budget Range: ${budget || 'Not specified'}
Referral: ${referral || 'N/A'}

Project Scope/Details:
${scope}
      `,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${enterprise || 'N/A'}</p>
        <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
        <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Referral:</strong> ${referral || 'N/A'}</p>
        <br/>
        <h3>Project Scope/Details:</h3>
        <p>${scope.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

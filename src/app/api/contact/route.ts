import fs from 'fs'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

import { mailOptions, transporter } from '@/emails/client'

export async function POST(req: NextRequest) {
  const data = await req.json()
  console.log(data);

  const templatePath = path.join(
    process.cwd(),
    'src',
    'emails',
    'contact-form_v2.html',
  )

  const template = fs.readFileSync(templatePath, 'utf-8')

  const htmlEmailContent = template
    .replace(/{{name}}/g, data.name)
    .replace(/{{email}}/g, data.email)
    .replace(/{{subject}}/g, data.subject)
    .replace(/{{message}}/g, data.message)

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      replyTo: data.email,
      html: htmlEmailContent,
    })
    await transporter.sendMail({
      from: `"Himanshu Kumawat" <${process.env.MY_EMAIL}>`,
      to: data.email, // Send to the visitor
      subject: 'Thank You for Contacting Me!',
      html: `<p>Hi ${data.name},</p>
             <p>Thank you for reaching out. I have received your message and will get back to you shortly.</p>
             <p>Best regards,</p>
             <p>Himanshu Kumawat</p>`,
    })

    console.log('Email sent successfully')
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({
      status: 500,
      success: false,
      error: error,
    })
  }
}

import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { error } from 'three'

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { from, to, subject, message } = await request.json()
    if (!from || !to || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    const { data, error } = await resend.emails.send({
      from: 'renata.castillo@codenok.com',
      replyTo: from,
      to: to,
      subject: subject,
      html: `<div>
        <h1>tqm naty</h1>    
        <img src="https://i.pinimg.com/originals/34/19/00/34190085b86b14d8de9b2eb7600bee00.gif"></img>
      </div>`
    })
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}

//renata_castillo_@outlook.com

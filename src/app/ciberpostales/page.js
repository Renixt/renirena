'use client'

import { IconSend } from '@tabler/icons-react'
import { useState } from 'react'

export default function Ciberpostales() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const clearForm = () => {
    setFrom('')
    setMessage('')
    setSubject('')
    setTo('')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const newMail = {
      from,
      to,
      subject,
      message
    }

    try {
      const res = await fetch('/api/ciberpostales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMail)
      })
      if (!res.ok) {
        const err = await res.json()
        console.error('Error:', err)
        return
      }

      const data = await res.json()
      console.log('Mail sent:', data)

      clearForm()
    } catch (error) {
      console.error('Request failed', error)
      console.error('Resend error JSON:', JSON.stringify(error, null, 2))
    }
  }

  return (
    <div className='flex h-screen flex-col content-center items-center justify-center bg-[url("/fots/IM000423.JPG")] font-mono'>
      <h1 className='font-inter text-6xl font-black text-white'>
        ciberpostales
      </h1>
      <h2 className='mb-10 text-white'>¡Manda tu ciberpostal por correo!</h2>
      <form onSubmit={handleSubmit}>
        <div className='w-lg bg-cyan-900 p-10'>
          <div className='mb-4 flex flex-col'>
            <label className='text-white'>Remitente:</label>
            <input
              type='email'
              required
              value={from}
              onChange={e => setFrom(e.target.value)}
              className='rounded border border-gray-600 bg-gray-100'
            ></input>
          </div>
          <div className='mb-4 flex flex-col'>
            <label className='text-white'>Destinatario:</label>
            <input
              type='email'
              required
              value={to}
              onChange={e => setTo(e.target.value)}
              className='rounded border border-gray-600 bg-gray-100'
            ></input>
          </div>
          <div className='mb-4 flex flex-col'>
            <label className='text-white'>Asunto:</label>
            <input
              required
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className='rounded border border-gray-600 bg-gray-100'
            ></input>
          </div>
          <div className='mb-4 flex flex-col'>
            <label className='text-white'>Mensaje:</label>
            <input
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
              className='rounded border border-gray-600 bg-gray-100'
            ></input>
          </div>
        </div>
        <button
          type='submit'
          className='-my-5 rounded-4xl bg-white p-3 drop-shadow hover:cursor-pointer hover:bg-gray-100'
        >
          <IconSend size='35px' color='#164e63' />
        </button>
      </form>
      <h2 className='text-center text-gray-400'>
        Felicita a tus amigos por su cumpleaños, <br /> deseale feliz navidad a
        tu familia o
        <br /> celebra tu aniversario con una ciberpostal
      </h2>
    </div>
  )
}

'use client'
import Navbar from '@/app/components/Navbar'
import ReviewForm from './ReviewForm'
import './style.css'
import { useState } from 'react'

export default function Add() {
  const [reviews, setReviews] = useState([{}])

  function newReview() {
    //mis reviews ya existentes, mas la nueva {}
    setReviews([...reviews, {}])
  }

  function handleSubmit() {}

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-gradient-to-bl from-[#f6dfb2] to-[#FFFFFF]'>
      <div className='pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:20px_20px]'></div>
      <div className='pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(249,173,44,0.3)_40%,rgba(248,250,252,1)_100%)]'></div>

      <Navbar />

      <div className='font-source-code-pro col relative z-10 mx-auto flex w-fit flex-col bg-white p-8 shadow-md'>
        <h1 className='pb-5 text-4xl font-extrabold text-gray-800'>
          Nueva Cafeteria
        </h1>
        <div>
          <form>
            <div className='pb-2'>
              <p>Nombre</p>
              <input className='add-input'></input>
            </div>

            <div className='pb-2'>
              <p>Dirección</p>
              <input className='add-input'></input>
            </div>
          </form>

          {/* Por cada elemento{} en reviews, muestra un componente */}
          <div className=''>
            {reviews.map((_, index) => (
              <ReviewForm key={index} />
            ))}
          </div>
          <button className='button2 mr-5' onClick={newReview}>
            Review +
          </button>
          <button onClick={handleSubmit} className='button2'>
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}

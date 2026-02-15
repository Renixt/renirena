'use client'
import React, { use, useEffect, useState } from 'react'
import './style.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function page() {
  const entries = [
    {
      title: '> Fiestas 2025',
      href: '/blog/fiestas2025',
      date: '01/01/26',
      styles: 'font-mansalva'
    },
    {
      title: '> Oda a Nave 2',
      href: '/blog/banos',
      date: '08/02/26',
      styles: 'font-mansalva'
    }
  ]

  const [images, setImages] = useState([]) // lista de imágenes desde /public/fots
  const [index, setIndex] = useState()
  // Cargar nombres de imágenes 1 sola vez cuando se monta el componente
  useEffect(() => {
    fetch('/fots.json')
      .then(r => r.json())
      .then(data => setImages(data.images || []))
  }, [])

  console.log(images[1])

  return (
    <div className='bg-[url("/fots/IM000800.JPG")]'>
      <Navbar />
      <div className='flex h-screen flex-col content-center items-center justify-center font-mono'>
        <div className='m-10 hidden h-2/3 shadow-xl md:flex'>
          <div className='bg-notebook w-120 rounded-md border-4 border-r-0 border-red-800'>
            {entries.map((entrie, index) => (
              <Link
                href={entrie.href}
                key={index}
                className='flex justify-between text-blue-950 hover:text-pink-700 hover:underline'
              >
                <p className={`ml-3 ${entrie.styles ?? ''}`}>{entrie.title}</p>

                <p className={`mr-3 ${entrie.styles ?? ''}`}>{entrie.date}</p>
              </Link>
            ))}
          </div>

          <div className='bg-notebook w-120 rounded-md border-4 border-l-1 border-red-800 border-l-amber-200'></div>
        </div>

        <div className='m-10 flex h-2/4 shadow-xl md:hidden'>
          <div className='bg-notebook w-80 rounded p-1'>
            {[...entries].reverse().map((entrie, index) => (
              <Link
                href={entrie.href}
                key={index}
                className='flex justify-between text-blue-950 hover:text-pink-700 hover:underline'
              >
                <p className={`ml-3 ${entrie.styles ?? ''}`}>{entrie.title}</p>

                <p className={`mr-3 ${entrie.styles ?? ''}`}>{entrie.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/*BLOG MENU
      <a href='/blog/fiestas2025'>FIESTAS 2025</a> */

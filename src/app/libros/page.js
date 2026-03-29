'use client'
import React, { useState } from 'react'

export default function page() {
  const libros = [
    {
      id: 1,
      titulo: 'Tokyo',
      autor: 'Mo Hayder',
      imagen: '',
      fecha_inicio: '29/03/2025',
      fecha_final: '29/01/2026',
      color: 'bg-[#ffff]'
    },
    {
      id: 2,
      titulo: 'Los Juegos del Hambre',
      autor: 'Suzanne Collins',
      imagen: '',
      fecha_inicio: '29/03/2025',
      fecha_final: '29/01/2026',
      color: 'bg-[#1d1b19]'
    }
  ]

  const [ancho, setAncho] = useState('w-20')
  const toggleAncho = () => {
    setAncho(prevAncho => (prevAncho === 'w-20' ? 'w-80' : 'w-20'))
  }

  return (
    <div className='min-h-full min-w-full bg-emerald-900'>
      <div className='flex flex-row gap-20'>
        {/*LIBROS */}
        {libros.map(libro => (
          <div
            key={libro.id}
            className={`${libro.color} flex h-100 ${ancho} flex-col gap-12 text-center`}
            onClick={() => toggleAncho()}
          >
            <h1 className='font-inter px-2 pt-10 font-bold'>{libro.titulo}</h1>
            <h2 className='px-2'>{libro.autor}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

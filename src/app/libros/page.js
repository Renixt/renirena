'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function page() {
  const libros = [
    {
      id: 1,
      titulo: 'Tokyo',
      autor: 'Mo Hayder',
      imagen: '',
      fecha_inicio: '29/03/2025',
      fecha_final: '29/01/2026',
      color: 'bg-[#ffff]',
      text_color:'text-[#1d1b19]'
    },
    {
      id: 2,
      titulo: 'Los Juegos del Hambre',
      autor: 'Suzanne Collins',
      imagen: '',
      fecha_inicio: '29/03/2025',
      fecha_final: '29/01/2026',
      color: 'bg-[#1d1b19]',
      text_color:'text-[#fff]'
    } ,  {
      id: 3,
      titulo: 'Stupeur et Tremblements',
      autor: 'Amélie Nothomb',
      imagen: '',
      fecha_inicio: '29/03/2025',
      fecha_final: '29/01/2026',
      color: 'bg-[#ffff]',
      text_color:'text-[#1d1b19]'
    }
  ]

  const [activo, setActivo] = useState(null)
  const toggleAncho = () => {
    setAncho(prevAncho => (prevAncho === 'w-20' ? 'w-80' : 'w-20'))
  }

  const [open, setOpen] = useState(null)

  return (
    <div className=' bg-emerald-900 '> <Navbar/>
      <div className='min-h-screen w-screen flex items-center justify-center '>
     
      <div className='flex flex-row gap-20'>
        {/*LIBROS */}
        {libros.map(libro => (
          <div
            key={libro.id}
            className={`${libro.color} flex h-100 ${activo === libro.id ? 'w-80' : 'w-20'} flex-col gap-12 text-center transition-all ease-in-out hover:cursor-pointer`}
            onClick={() => setActivo(libro.id)}
            onDoubleClick={() => setOpen(libro.id)}
          >
            <h1 className={`font-inter px-2 pt-10 font-bold  ${libro.text_color}`}>{libro.titulo}</h1>
            <h2 className={`px-2 ${libro.text_color}`}>{libro.autor}</h2>
          </div>
        ))}
      </div>
    </div></div>
   
  )
}

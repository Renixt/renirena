'use client'
import Navbar from '@/app/components/Navbar'
import { Icon360View, IconFolder, IconFolderFilled } from '@tabler/icons-react'
import { React, useState } from 'react'

export default function Banos() {
  const galeria = [
    {
      img: '/blog/banos/DSC02763.JPG',
      desc: 'Nave2',
      rot: 'rotate-8'
    },
    {
      img: '/blog/banos/DSC02767.JPG',
      desc: 'Nave2',
      rot: '-rotate-8'
    },
    {
      img: '/blog/banos/DSC02774.JPG',
      desc: 'Nave2',
      rot: 'rotate-10'
    },
    {
      img: '/blog/banos/IMG_7856.JPG',
      desc: 'Nave2',
      rot: 'rotate-2'
    },
    {
      img: '/blog/banos/IMG_7858.JPG',
      desc: 'Nave2',
      rot: '-rotate-8'
    },
    {
      img: '/blog/banos/IMG_7860.JPG',
      desc: 'Nave2',
      rot: '-rotate-8'
    },
    {
      img: '/blog/banos/IMG_7867.JPG',
      desc: 'Nave2',
      rot: '-rotate-10'
    },
    {
      img: '/blog/banos/IMG_7863.JPG',
      desc: 'Nave2',
      rot: 'rotate-8'
    }
  ]
  return (
    <div className='bg-[url(/blog/banos/textura.jpg)] bg-center'>
      <Navbar />

      <div className='flex min-h-screen w-screen flex-col items-center justify-center text-[#244896]/70'>
        <div className='my-20 bg-amber-50/50 text-center shadow-2xl md:h-1/2 md:w-1/2'>
          <h1 className='m-10 font-mono text-6xl font-extrabold'>
            ODA A NAVE 2
          </h1>
          <div className='mx-10 rounded py-5 text-left font-mono md:px-16'>
            <div className='flex flex-row justify-between'>
              <h3 className='text-2xl'>Fanny</h3>
              <p className='text-right'>7.9/10</p>
            </div>

            <p>
              Es un lugar agradable, pero olía un poco raro, hay luz y el agua
              está clara. Regresaría sin duda. Mejor que los baños de RH Pero no
              mejor que otros baños.
            </p>
          </div>

          <div className='mx-10 rounded py-5 pb-20 text-left font-mono md:px-16'>
            <div className='flex flex-row justify-between'>
              <h3 className='text-2xl'>Rena</h3>
              <p className='text-right'>9.9999/10</p>
            </div>

            <p>
              Los mejores baños de la zona, guardan un lugar especial en mi
              corazón. Hemos pasado por muchos momentos importantes. Siempre
              estan ahi cuando los necesitas. Gran agua limpia se agradece. (La
              mayoria del tiempo)
            </p>
          </div>
        </div>

        <div className='container flex flex-wrap justify-center'>
          {galeria.map((foto, key) => (
            <div className='group relative' key={key}>
              <img
                src={foto.img}
                className={` ${foto.rot} h-50 shadow-lg transition-transform ease-in-out hover:scale-105 md:h-96`}
              ></img>
              <p className='absolute bottom-0 left-0 p-1 font-serif text-white opacity-0 transition-opacity duration-300 ease-in-out'>
                {foto.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* 
 const dialog = document.getElementById('dialog')
  const openButton = document.getElementById('open')
 <button className='m-10 text-blue-900 hover:text-blue-400' id='open'>
          {' '}
          <IconFolderFilled />
        </button>

        <dialog id='dialog'>
          <img src='/blog/banos/amigasp.jpg' className='h-100'></img>
        </dialog>
        
openButton.addEventListener('click', () => {
    dialog.showModal()
  }) */

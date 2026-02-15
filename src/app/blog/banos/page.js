'use client'
import { Icon360View, IconFolder, IconFolderFilled } from '@tabler/icons-react'
import { React, useState } from 'react'

export default function Banos() {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-[url(/blog/banos/textura.jpg)] bg-center text-[#244896]/70'>
      <div className='h-1/2 w-1/2 bg-amber-50/50 text-center shadow-2xl'>
        <h1 className='m-10 font-mono text-6xl font-extrabold'>ODA A NAVE 2</h1>
        <div className='mx-10 rounded px-16 py-5 text-left font-mono'>
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

        <div className='mx-10 rounded px-16 py-5 text-left font-mono'>
          <div className='flex flex-row justify-between'>
            <h3 className='text-2xl'>Rena</h3>
            <p className='text-right'>9.9999/10</p>
          </div>

          <p>
            Los mejores baños de la zona, guardan un lugar especial en mi
            corazón. Hemos pasado por muchos momentos importantes. Siempre estan
            ahi cuando los necesitas. Gran agua limpia se agradece. (La mayoria
            del tiempo)
          </p>
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

'use client'
import Navbar from '@/app/components/Navbar'
import { Icon360View, IconFolder, IconFolderFilled } from '@tabler/icons-react'
import { React, useState } from 'react'

export default function Vento() {
  const galeria = [
    {
      img: '/fots/IM000144 (3).JPG',
      desc: 'Nave2',
      rot: 'rotate-8'
    },
    {
      img: '/fots/IM000314.JPG',
      desc: 'Nave2',
      rot: '-rotate-8'
    },
    {
      img: '/fots/IM000151 (2).JPG',
      desc: 'Nave2',
      rot: 'rotate-10'
    },
    {
      img: '/fots/DSC02778.JPG',
      desc: 'Nave2',
      rot: 'rotate-2'
    },
    {
      img: '/fots/IM000149 (2).JPG',
      desc: 'Nave2',
      rot: '-rotate-8'
    },
    {
      img: '/fots/DSC02780.JPG',
      desc: 'Nave2',
      rot: '-rotate-8'
    },
    {
      img: '/fots/IM000117 (2).JPG',
      desc: 'Nave2',
      rot: '-rotate-10'
    },
    {
      img: '/fots/IM000115.JPG',
      desc: 'Nave2',
      rot: 'rotate-8'
    }
    ,
   
    {
      img: '/fots/IM000116.JPG',
      desc: 'Nave2',
      rot: 'rotate-8'
    },
    {
      img: '/fots/IM000142 (2).JPG',
      desc: 'Nave2',
      rot: 'rotate-8'
    },
    {
      img: '/fots/IM000404.JPG',
      desc: 'Nave2',
      rot: 'rotate-8'
    },{
      img: '/blog/vento/3.png',
      desc: 'Nave2',
      rot: 'rotate-8'
    },
  ]
  return (
    <div className='bg-gradient-to-bl from-[#B73E64] to-[#FFD1EB] bg-center'>
      <Navbar />
    
      <div className='flex min-h-screen w-screen flex-col items-center justify-center text-[#244896]/70 mt-30'>
        
        <img src="/blog/vento/VENTO.png" className="-mb-170 z-10 h-130 "></img>

        <div className='container flex flex-wrap justify-center'>
          {galeria.map((foto, key) => (
            <div className='group relative' key={key}>
              <img
                src={foto.img}
                className={` h-10 shadow-lg transition-transform ease-in-out  md:h-70 border-2 border-pink-700`}
              ></img>
              <p className='absolute bottom-0 left-0 p-1 font-serif text-white opacity-0 transition-opacity duration-300 ease-in-out'>
                {foto.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p>grandes momentos tqm vento</p>
    </div>
  )
}
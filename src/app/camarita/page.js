'use client'

import Navbar from '../components/Navbar'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import { Camara } from '../components/Camara'

export default function Camarita() {
  const dialogRef = useRef(null)
  const [images, setImages] = useState([]) // lista de imágenes desde /public/fots
  const [imgSrc, setImgSrc] = useState(null)
  const [rotateNum, setRotateNum] = useState("");
  const rotates = [
    "rotate-2",
  "rotate-3",
  "rotate-9",
  "rotate-6",
  "rotate-12",
  "-rotate-12",
  "-rotate-9",
  "-rotate-6",
  "-rotate-4",
  "-rotate-1",
];

  function closeModal() {
    dialogRef.current?.close()
    setImgSrc(null) // o pon una de fallback
  }

  // Cargar nombres de imágenes 1 sola vez cuando se monta el componente
  useEffect(() => {
  fetch("/fots.json")
    .then(r => r.json())
    .then(data => setImages(data.images || []));
}, []);

  const openRandomImage = () => {
    if (!images.length) {
      setImgSrc(null) // o pon una de fallback
      setRotateNum("");
    } else {
      const randomRotate = rotates[Math.floor(Math.random() * rotates.length)];
    setRotateNum(randomRotate);
      const random = images[Math.floor(Math.random() * images.length)]
      setImgSrc(random)
    }
    dialogRef.current?.showModal()
  }

  return (
    <div className='flex'>
      <div className='relative min-h-screen w-full overflow-hidden bg-gradient-to-bl from-[#f6dfb2] to-[#FFFFFF]'>
        <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:20px_20px]' />
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(249,173,44,0.3)_40%,rgba(248,250,252,1)_100%)]' />

        <Navbar />

        {/* Modal */}
        <dialog
          ref={dialogRef}
          onClick={e => {
            if (e.target === dialogRef.current) {
              closeModal();
            }
          }}
          className={`fixed ${rotateNum} relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible shadow-2xl backdrop:bg-black/25 border-0 outline-none focus:outline-none hover:scale-105`}
        >
          <div className='relative z-0'>
            {imgSrc ? (
              <img
                src={imgSrc.src}
                alt='Random'
                className='md:max-h-[60vh] md:max-w-[60vw] max-h-[90vh] max-w-[90vw]'
              />
            ) : (
              <div className='p-6 text-sm text-gray-600'>No hay imágenes.</div>
            )}
          </div>
          
          <p className='absolute bottom-2 left-6 font-semibold text-amber-600/80 font-mono text-sm md:text-lg '>
            {imgSrc?.DateTimeOriginal
              ? new Date(imgSrc.DateTimeOriginal).toLocaleString()
              : 'Sin datos'}
          </p>
        </dialog>

        <div className='h-[100vh] w-[100vw] cursor-pointer'>
          <Canvas>
            <Environment preset='apartment' />
            <OrbitControls enableZoom={false} enablePan={false}/>
            <Camara scale={0.15} onClick={openRandomImage} />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

/*<button
            className='absolute top-2 right-6 z-1 cursor-pointer text-xl text-white'
            onClick={closeModal}
          >
            <span className='sr-only'>Close</span>X{' '}
          </button> */
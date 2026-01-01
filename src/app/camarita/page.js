'use client'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import { Camara } from '../components/Camara'
import { AnimatePresence, motion } from 'framer-motion'

export default function Camarita() {
  const dialogRef = useRef(null)
  const [images, setImages] = useState([]) // lista de imágenes desde /public/fots
  const [imgSrc, setImgSrc] = useState(null)
  const [rotateNum, setRotateNum] = useState('')
  const rotates = [
    'rotate-2',
    'rotate-3',
    'rotate-9',
    'rotate-6',
    'rotate-12',
    '-rotate-12',
    '-rotate-9',
    '-rotate-6',
    '-rotate-4',
    '-rotate-1'
  ]
  const [isOpen, setIsOpen] = useState(false)
  const [usedImages, setUsedImages] = useState([])

  // Al montar el dialog (cuando isOpen pasa a true), invoca showModal()
  useEffect(() => {
    if (isOpen) dialogRef.current?.showModal()
  }, [isOpen])

  // Cargar nombres de imágenes 1 sola vez cuando se monta el componente
  useEffect(() => {
    fetch('/fots.json')
      .then(r => r.json())
      .then(data => setImages(data.images || []))
  }, [])

  const getRandomImage = () => {
    if (!images.length) {
      setImgSrc(null)
      setRotateNum('')
    } else {
      const randomRotate = rotates[Math.floor(Math.random() * rotates.length)]
      setRotateNum(randomRotate)
      const random = images[Math.floor(Math.random() * images.length)]
      setImgSrc(random)
      setUsedImages(prev => [...prev, { ...random, rotateClass: randomRotate }])
    }
  }

  const openRandomImage = () => {
    if (!imgSrc) getRandomImage()
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function handleExitComplete() {
    dialogRef.current?.close()
    setImgSrc(null)
    setRotateNum('')
    getRandomImage()
  }

  return (
    <div className=''>
      <div className='relative min-h-[200vh] w-full bg-[url(/imagenes/camara/cork.jpg)] [background-size:100%_auto] bg-repeat-y'>
        <Navbar />

        {/* Modal */}
        <AnimatePresence
          initial={false}
          mode='wait'
          onExitComplete={handleExitComplete}
        >
          {isOpen && (
            <motion.dialog
              key='fotodialog'
              ref={dialogRef}
              onClick={e => {
                if (e.target === dialogRef.current) closeModal()
              }}
              className={`fixed ${rotateNum} relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible border-0 shadow-2xl outline-none backdrop:bg-black/25 focus:outline-none`}
              initial={{ scale: 0.95, y: -50 }}
              animate={{
                scale: 1,
                y: 0,
                transition: { duration: 0.2, ease: 'easeOut' }
              }}
              exit={{
                scale: 0.95,
                transition: { duration: 0.2, ease: 'easeIn' }
              }}
            >
              <div className='relative z-0 bg-black'>
                {imgSrc ? (
                  <img
                    src={imgSrc.src}
                    alt='Random'
                    className='max-h-[90vh] max-w-[90vw] object-contain md:max-h-[60vh] md:max-w-[60vw]'
                    sizes='(max-width: 768px) 90vw, 60vw'
                  />
                ) : (
                  <div className='p-6 text-sm text-gray-600'>
                    No hay imágenes.
                  </div>
                )}
              </div>

              <motion.p
                className='absolute bottom-2 left-6 font-mono text-sm font-semibold text-amber-600/80 md:text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {imgSrc?.DateTimeOriginal
                  ? new Date(imgSrc.DateTimeOriginal).toLocaleString()
                  : 'Sin datos'}
              </motion.p>
            </motion.dialog>
          )}
        </AnimatePresence>
        <div className='z-10 h-[100vh] w-[100vw] cursor-pointer'>
          <Canvas className='z-10'>
            <Environment preset='apartment' />
            <OrbitControls enableZoom={false} enablePan={false} />
            <Camara scale={0.15} onClick={openRandomImage} />
          </Canvas>
        </div>

        <div className="absolute top-10 z-0 flex flex-row flex-wrap content-center justify-center gap-10 bg-[url('/imagenes/camara/cork.jpg')] [background-size:100%_auto] bg-repeat-y">
          {usedImages.slice(1, -1).map((img, i) => (
            <motion.img
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
              key={i}
              src={img.src}
              alt='memories'
              className={`h-70 object-cover shadow-lg ${img.rotateClass}`}
              loading='lazy'
              decoding='async'
            />
          ))}
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

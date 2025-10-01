'use client'
import { useParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function cafeInfo({ data }) {
  const params = useParams()
  const cafeAudio = useRef(null)
  const rotation = ['rotate-6', '-rotate-12']

  const cafe = data.find(c => c.slug === params.slug)
  useEffect(() => {
    cafeAudio.current = new Audio(cafe.audio)
  }, [])

  const start = () => {
    cafeAudio.current.play()
  }
  return (
    <div className='flex flex-col items-center justify-center lg:items-baseline'>
      {cafe.imagenes?.[0] && (
        <motion.div
          className='absolute top-28 left-1/8 mb-5 hidden h-110 w-90 rotate-6 justify-center border-1 border-gray-100 bg-gradient-to-t from-[#f5f5f5] to-[#FFFFFF] shadow-md transition-transform duration-600 ease-in-out hover:z-10 hover:scale-105 lg:flex'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
        >
          <img src={cafe.imagenes[0]} className='h-90 p-4'></img>
        </motion.div>
      )}

      <motion.div
        className='font-source-code-pro relative z-1 mb-10 h-auto w-70 bg-gradient-to-t bg-[url(/imagenes/papel.jpg)] from-[#efeeee]/50 to-[#FFFFFF]/50 p-5 text-gray-800 shadow  md:w-90'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <h1 className='font-inter pt-10 text-center text-2xl font-[700]'>
          {cafe.titulo.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <h3 className='pb-10 text-center text-sm'>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.direccion)}`}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-600 hover:underline'
          >
            {cafe.direccion}
          </a>
        </h3>
        <div className='flex flex-row justify-between'>
          {' '}
          <h3>{cafe.fecha}</h3>
          {cafe.audio && (
            <img
              src='/imagenes/audio.svg'
              className='h-5 cursor-pointer'
              onClick={start}
            ></img>
          )}
        </div>

        <hr />
        <div className='flex flex-row justify-between pb-5'>
          <h3 className='text-md text-left font-[600] tracking-wider'>
            Review de Café
          </h3>
          <h3 className='text-md text-right font-[600] tracking-wider'>
            Precio
          </h3>
        </div>

        {/*Usa Object.entries() para iterar sobre las claves y valores del objeto orden: */}

        {Object.entries(cafe.orden).map(([key, orden]) => (
          <div key={key} className='pb-7'>
            <div className='flex flex-row justify-between pb-1'>
              <h3 className='text-md font-semibold tracking-widest uppercase'>
                {orden.descripcion}
              </h3>
              <p className='text-sm tracking-tight text-gray-500 md:mr-4'>
                {orden.precio !== null && orden.precio !== undefined
                  ? `$${orden.precio}`
                  : 'null'}
              </p>
            </div>
            <h3 className='text-sm'>{orden.review}</h3>
          </div>
        ))}

        <h1 className='text-center'>*******renirenaa********</h1>

        <div className='mt-5 flex justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='200'
            height='60'
            viewBox='0 0 200 60'
          >
            <rect x='0' y='0' width='4' height='60' fill='#1f2937' />
            <rect x='6' y='0' width='2' height='60' fill='#1f2937' />
            <rect x='10' y='0' width='3' height='60' fill='#1f2937' />
            <rect x='15' y='0' width='2' height='60' fill='#1f2937' />
            <rect x='20' y='0' width='6' height='60' fill='#1f2937' />
            <rect x='28' y='0' width='3' height='60' fill='#1f2937' />
            <rect x='33' y='0' width='2' height='60' fill='#1f2937' />
            <rect x='37' y='0' width='5' height='60' fill='#1f2937' />
            <rect x='44' y='0' width='1' height='60' fill='#1f2937' />
            <rect x='48' y='0' width='4' height='60' fill='#1f2937' />
            <rect x='54' y='0' width='6' height='60' fill='#1f2937' />
            <rect x='62' y='0' width='3' height='60' fill='#1f2937' />
            <rect x='67' y='0' width='5' height='60' fill='#1f2937' />
            <rect x='74' y='0' width='2' height='60' fill='#1f2937' />
            <rect x='78' y='0' width='6' height='60' fill='#1f2937' />
            <rect x='86' y='0' width='4' height='60' fill='#1f2937' />
            <rect x='92' y='0' width='2' height='60' fill='#1f2937' />
            <rect x='96' y='0' width='3' height='60' fill='#1f2937' />
            <rect x='101' y='0' width='3' height='60' fill='#1f2937' />
            <rect x='109' y='0' width='4' height='60' fill='#1f2937' />
            <rect x='115' y='0' width='2' height='60' fill='#1f2937' />
            <rect x='119' y='0' width='5' height='60' fill='#1f2937' />
            <rect x='126' y='0' width='3' height='60' fill='#1f2937' />
            <rect x='131' y='0' width='4' height='60' fill='#1f2937' />
            <rect x='137' y='0' width='6' height='60' fill='#1f2937' />
            <rect x='145' y='0' width='3' height='60' fill='#1f2937' />
            <rect x='150' y='0' width='2' height='60' fill='#1f2937' />
            <rect x='154' y='0' width='5' height='60' fill='#1f2937' />
            <rect x='161' y='0' width='4' height='60' fill='#1f2937' />
            <rect x='167' y='0' width='3' height='60' fill='#1f2937' />
            <rect x='175' y='0' width='3' height='60' fill='#1f2937' />
            <rect x='180' y='0' width='4' height='60' fill='#1f2937' />
            <rect x='186' y='0' width='2' height='60' fill='#1f2937' />
            <rect x='190' y='0' width='6' height='60' fill='#1f2937' />
          </svg>
        </div>
      </motion.div>

      {cafe.imagenes?.[1] && (
        <motion.div className='absolute top-72 right-1/8 -z-0 mb-5 hidden h-110 w-90 -rotate-10 justify-center border-1 border-gray-100 bg-gradient-to-t from-[#f5f5f5] to-[#FFFFFF] shadow-md transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105 lg:flex'
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8, duration: 1, ease: 'easeInOut' }}>
          <motion.img src={cafe.imagenes[1]} className='h-90 p-4' ></motion.img>
        </motion.div>
      )}

      {cafe.imagenes && (
        <div className='block lg:hidden'>
          {Object.entries(cafe.imagenes).map(([key, orden], index) => (
            <div
              key={key}
              className={`mb-5 flex h-90 w-70 justify-center bg-gradient-to-t from-[#f3f3f3] to-[#FFFFFF] shadow-md transition-transform duration-600 ease-in-out hover:z-10 hover:scale-105 ${rotation[index] || ''}`}
            >
              <img src={orden} className='h-70 p-4'></img>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/** <div className="rotate-6"> 
                    {Object.entries(cafe.imagenes).map(([key, orden]) => (
                    <div key={key} className="bg-white h-110 w-90 mb-5 flex justify-center">
                        <img src={cafe.imagenes[0]} className="h-90 p-4"></img>
                    </div>
                ))}</div> */

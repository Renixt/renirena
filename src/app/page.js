'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation' // App Router
import Navbar from './components/Navbar'

export default function Home() {
  const router = useRouter()
  const cafeAudio = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      cafeAudio.current = new Audio('/sonidos/gulp.mp3')
    }
  }, [])

  const start = () => {
    if (cafeAudio.current) {
      cafeAudio.current
        .play()
        .then(() => {
          setTimeout(() => {
            router.push('/cafe') // navega después de reproducir
          }, 500) // espera 800ms
        })
        .catch(err => {
          console.error('No se pudo reproducir el audio:', err)
          router.push('/cafe') // en caso de error, navega de todos modos
        })
    }
  }

  return (
    <main className='flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-bl from-[#B73E64] to-[#FFD1EB]'>
      <div className=''>
        <h1 className='font-inter text-3xl font-[700] text-white md:text-9xl'>
          renirena
        </h1>
      </div>
      <div className='mt-10 flex flex-row flex-wrap justify-center'>
        <button onClick={start}>
          <img
            src='imagenes/coffe1.png'
            className='h-40 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-104 hover:-rotate-1 md:h-110'
          />
        </button>
        <button onClick={() => router.push('/camarita')}>
          <img
            src='imagenes/camara3.png'
            className='h-40 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-104 hover:rotate-1 md:h-75'
          />
        </button>

        <button onClick={() => router.push('/escine')}>
          <img
            src='imagenes/escine.png'
            className='m-2 h-40 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-104 hover:rotate-1 md:h-110'
          />
        </button>
      </div>
    </main>
  )
}

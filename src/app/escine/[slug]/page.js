'use client'
import Navbar from '@/app/components/Navbar'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Palomitas from '../Palomitas'

export default function page() {
  const params = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    if (!params?.slug) return //porque se recargaba infinitamente la pagina
    fetch(`/api/escine/${params.slug}`) //llama la ruta dentro de [slug]
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err))
  }, [params.slug]) //manda el numero como 2do parametro

  //color rating
  const getRatingClass = rating => {
    if (rating >= 8) {
      return 'rating-good'
    }

    if (rating >= 5 && rating < 8) {
      return 'rating-ok'
    }

    return 'rating-bad'
  }

  return (
    <div className='relative min-h-screen overflow-hidden bg-gray-700'>
      <Navbar />
      <Palomitas />
      {/* Fondo blur */}
      <div
        className='absolute inset-0 min-h-[600px] scale-110 bg-cover bg-center bg-no-repeat blur-lg brightness-50'
        style={{ backgroundImage: `url("${movie.image}")` }}
      />

      {/* Contenido encima (nítido) */}
      <div className='container2 relative z-10 mx-0 my-10 flex justify-center pt-10'>
        <div className='-pl-50 z-10 -mr-20 flex flex-col items-center'>
          <h1 className='font-inter mt-10 -rotate-2 pt-10 text-5xl font-extrabold text-[#e1e1e1] uppercase text-shadow-black/20 text-shadow-lg'>
            {movie.genre}
          </h1>
          <h1
            className={` ${getRatingClass(movie.rating)} font-inter -rotate-10 text-9xl font-extrabold uppercase text-shadow-black/20 text-shadow-lg`}
          >
            {movie.rating}
          </h1>
        </div>

        <img
          src={movie.image}
          className='h-[600px] rotate-6 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-0'
          alt=''
        />
        <div className=''>
          <h1 className='font-inter -mx-10 mt-10 -rotate-2 text-9xl font-extrabold text-[#e1e1e1] uppercase text-shadow-black/20 text-shadow-lg'>
            {movie.title}
          </h1>
        </div>
      </div>

      {/*REVIEWS */}
      <div className='container2 relative z-10 mx-0 my-10 flex justify-center pt-30'>
        <div className='-pl-50 z-10 -mr-20 flex flex-col items-center gap-10'></div>
      </div>
    </div>
  )
}

/**
 * 
 *   const params = useParams()
  console.log(params)

  
<div className='bg-gray-100 p-5'>
            {' '}
            <h1 className='font-inter text-4xl font-bold uppercase'>
              RENATA CASTILLO
            </h1>
            <p>ME ENCANTOOOOOOOOO</p>
          </div>

  <div className='m-10 rounded-lg bg-green-400 p-5'>
            <h1 className='font-inter text-lg font-bold uppercase'>
              RENATA CASTILLO
            </h1>
            <p>ME ENCANTOOOOOOOOO</p>
            <div className='-mb-9 h-10 w-10 rotate-45 justify-end rounded-sm bg-green-400'></div>
          </div>
 */

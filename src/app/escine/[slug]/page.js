'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

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

  return (
    <div>
      <img src={movie.image} className='h-100'></img>
      <h1>{movie.title}</h1>
      <h1>{movie.genre}</h1>
      <h1>{movie.rating}</h1>
    </div>
  )
}

/**
 * 
 *   const params = useParams()
  console.log(params)

  
 */

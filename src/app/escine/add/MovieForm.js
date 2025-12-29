'use client'
import React, { useState } from 'react'

export default function MovieForm() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  // const [review, setReview] = useState('')
  const [genre, setGenre] = useState('')
  const [foto, setFoto] = useState('')

  const genreLabels = {
    1: 'Horror',
    2: 'Anime',
    3: 'Fantasy',
    4: 'Adventure',
    5: 'Animation',
    6: 'Action',
    7: 'Drama'
  }

  //clear from
  const clearForm = () => {
    setTitle('')
    setGenre('')
    setRating('')
    setFoto('')
    //  setReview('')
  }

  const handleSubmit = async e => {
    e.preventDefault() //avoid the page from being relodaded

    const newMovie = {
      title,
      image: foto,
      genre,
      rating: Number(rating)
    }

    try {
      const res = await fetch('/api/escine', {
        method: 'POST',
        headers: {
          //metadatos que viajan con la peticion http
          //avisar que se mandan json
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMovie)
      })
      if (!res.ok) {
        const err = await res.json()
        console.error('Error:', err)
        return
      }

      const data = await res.json()
      console.log('Movie created:', data)

      clearForm()
    } catch (error) {
      console.error('Request failed', error)
    }
  }

  return (
    <div className='rounded-2xl border px-16 py-5'>
      <h1 className='title font-inter font-bold'>Nueva Pelicula</h1>
      <form className='movie-form' onSubmit={handleSubmit}>
        <div>
          <label>Titulo</label>
          <input
            type='text'
            value={title}
            className='form-input'
            onChange={e => setTitle(e.target.value)} //e evento, target is this input field
          ></input>
        </div>

        <div>
          <label>Rating</label>
          <input
            type='number'
            value={rating}
            className='form-input'
            onChange={e => setRating(e.target.value)} //e evento, target is this input field
          ></input>
        </div>

        <fieldset className='priority-fieldset'>
          <legend>Genero</legend>

          {Object.entries(genreLabels).map(([value, label]) => (
            <label key={label} className='priority-label'>
              <input
                className='priority-input'
                type='radio'
                value={label}
                checked={genre === label}
                onChange={e => setGenre(e.target.value)} //e evento, target is this input field
              ></input>
              {label}
            </label>
          ))}
        </fieldset>

        <div>
          <label>Foto</label>
          <input
            type='text'
            value={foto}
            className='form-input'
            onChange={e => setFoto(e.target.value)} //e evento, target is this input field
          ></input>
        </div>

        <button type='submit' className='button'>
          Submit
        </button>
      </form>
    </div>
  )
}

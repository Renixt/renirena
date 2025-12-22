'use client'
import React, { useState } from 'react'

export default function MovieForm() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [review, setReview] = useState('')
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
    setReview('')
  }

  const handleSubmit = e => {
    e.preventDefault() //avoid the page from being relodaded

    clearForm()
  }

  return (
    <div>
      <h1 className='title font-inter font-extrabold uppercase'>
        Nueva Pelicula
      </h1>
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
            type='input'
            value={foto}
            className='form-input'
            onChange={e => setFoto(e.target.value)} //e evento, target is this input field
          ></input>
        </div>

        <div>
          <label>Review</label>
          <input
            type='textarea'
            value={review}
            className='form-input'
            onChange={e => setReview(e.target.value)} //e evento, target is this input field
          ></input>
        </div>

        <button type='submit' className='button'>
          Submit
        </button>
      </form>
    </div>
  )
}

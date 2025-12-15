import React, { useState } from 'react'
import '../styles.css'
import MovieCard from './MovieCard'

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  //useState : rerenders ui changes

  const [searchTerm, setSearchTerm] = useState('')
  const [genre, setGenre] = useState('All Genres')
  const [rating, setRating] = useState('All')

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleGenreChange = e => {
    setGenre(e.target.value)
  }

  const handleRatingChange = e => {
    setRating(e.target.value)
  }

  //devuelce de la peli enciadatrue / false
  const matchesGenre = (movie, genre) => {
    return (
      genre === 'All Genres' ||
      movie.genre.toLowerCase().includes(genre.toLowerCase())
    )
  }

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  }

  //solo para los que cumplen la condición del caso seleccionado.
  const matchesRating = (movie, rating) => {
    switch (rating) {
      case 'All':
        return true

      case 'GOD':
        return movie.rating === '10'

      case 'Good':
        return movie.rating >= 8 && movie.rating < 10

      case 'Meeh':
        return movie.rating >= 5 && movie.rating < 8

      case 'Bad':
        return movie.rating < 5

      default:
        return false
    }
  }

  //takes the array and filters it, iterates every movie
  //does the movie.title includes the search term?
  //Para incluir una película en filteredMovies, las dos condiciones deben ser true:
  const filteredMovies = movies.filter(
    movie =>
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearchTerm(movie, searchTerm)
  )

  //map transforms data

  return (
    <div>
      <input
        type='text'
        placeholder='Buscar Pelicula...'
        className='search-input'
        value={searchTerm} //lo que escribe el user
        onChange={handleSearchChange} //entire ui gets re rendered
      ></input>

      <div className='filter-bar'>
        <div className='filter-slot'>
          <label>Genre</label>
          <select
            className='filter-dropdown'
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Horror</option>
            <option>Anime</option>
            <option>Fantasy</option>
            <option>Adventure</option>
            <option>Animation</option>
            <option>Action</option>
            <option>Drama</option>
          </select>
        </div>
        <div className='filter-slot'>
          <label>Rating</label>
          <select
            className='filter-dropdown'
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>GOD</option>
            <option>Good</option>
            <option>Meeh</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className='movies-grid'>
        {filteredMovies.map(movie => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)} //true si watchlist tiene la movie
          ></MovieCard>
        ))}
      </div>
    </div>
  )
}

'use client'
import React, { useContext } from 'react'
import MoviesGrid from './MoviesGrid'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Header from './Header'
import Palomitas from './Palomitas'
import ThemeContext from '../context/ThemeContext'

export default function page() {
  const [movies, setMovies] = useState([])
  const [watchlist, setWatchlist] = useState([])

  //useEffect: render one time when the comp renders
  //fetch info from the json file
  useEffect(() => {
    fetch('/api/escine') //fetch
      .then(response => response.json()) //make it sjon
      .then(data => setMovies(data.reverse())) //put it in data, then movies
  }, [])

  //prev = arreglo de ids
  const toggleWatchlist = movieId => {
    //take movieId when we toggle  //updating state watchlist
    setWatchlist(
      prev =>
        prev.includes(movieId) //the current state includes the movie id?
          ? prev.filter(id => id !== movieId) //YES -> filter/leave the ones that are not == movieid
          : [...prev, movieId] //ad the id at the end of the array
    )
  }
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={theme}>
      <Navbar /> <Header />
      <Palomitas />
      <div className='container3'>
        <MoviesGrid
          movies={movies}
          watchlist={watchlist}
          toggleWatchlist={toggleWatchlist}
        />
      </div>
      <Footer />
    </div>
  )
}

'use client'
import React from 'react'

import Navbar from '@/app/components/Navbar'
import Header from '../Header'
import Footer from '@/app/components/Footer'
import Palomitas from '../Palomitas'
import MovieForm from './MovieForm'

export default function page() {
  return (
    <div className='dark'>
      <Navbar />
      <Header />
      <div className='container2'>
        <MovieForm />
      </div>
      <Footer />
    </div>
  )
}

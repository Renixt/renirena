import React from 'react'
import '../style.css'
import Navbar from '@/app/components/Navbar'
import Navidad from './Navidad'
import Anonuevo from './Anonuevo'
export default function page() {
  return (
    <div className='bg-amber-100'>
      <Navbar />
      <Navidad />
      <Anonuevo />
    </div>
  )
}

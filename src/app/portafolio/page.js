import './styles.css'
import Hero from './Hero'
import Navbar from './Navbar'
import Folder from './Folder'
import Postit from './Postit'
import Projects from './Projects'
import { motion } from 'framer-motion'
export default function portafolio() {
  return (
    <div className='font-source-code-pro portafolio-bg relative min-h-screen overflow-hidden'>
      <div className='absolute left-5 z-0 -ml-0.5 h-full w-0.5 bg-[#da6d6d] md:left-20'></div>

      <Navbar />
      <Postit />
      <hr className='border-1 border-[#da6d6d]' />

      <Hero />
      <Folder />
    </div>
  )
}

//  experience = [{ title: '', place: '', time: '', bulletpoints: ['', '', ''] }]

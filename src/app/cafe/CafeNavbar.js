'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CafeNavbar({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative z-10 w-64 md:ml-20'>
      <div>
        <button onClick={toggleNavbar}>
          {' '}
          <img
            src='/imagenes/cafe3.png'
            className='h-10 transition-transform duration-300 ease-in-out hover:scale-107 hover:cursor-pointer md:h-30'
          ></img>
        </button>
      </div>

      {isOpen && (
        <motion.div
          className='rounded-xl bg-gradient-to-b from-amber-50/50 to-amber-50/0 p-5 text-sm md:text-2xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{opacity:0}}
          transition={{ duration: .5, ease: 'easeInOut' }}
        >
          {data.map((data, key) => {
            return (
              <div key={key} className='mb-2 md:mb-3'>
                <Link
                  className='font-mansalva ml-5 cursor-pointer font-medium text-[#7A370E] transition-discrete duration-500 ease-out hover:tracking-widest hover:text-[#A54E1A]'
                  href={`/cafe/${encodeURIComponent(data.slug)}`}
                >
                  {data.titulo}
                </Link>
              </div>
            )
          })}
        </motion.div>
      )}
    </div>
  )
}

/*  
                
                
                
                 <div className={`origin-top-right overflow-hidden transition-transform duration-600 ease-in-out ${isOpen ? 'scale-y-100 ' : 'scale-y-0 '}`}>
                <nav>
                    {data.map((data, key) => {
                        return (<div  key={key} className=' mb-4'>
                            <Link className=" text-3xl font-mansalva hover:text-[#A54E1A] hover:text-4xl text-[#7A370E] cursor-pointer transition-discrete duration-300 ease-in-out" href={`/cafe/${encodeURIComponent(data.slug)}`}>{data.titulo}</Link></div>) ;
                    })}
                </nav>
            </div>
*/

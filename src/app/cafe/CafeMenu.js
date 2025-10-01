'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CafeMenu({ data }) {
  return (
    <div className='z-10 lg:mr-50 lg:ml-50'>
      <div className='flex flex-row flex-wrap items-center justify-center gap-5'>
        {data.map((data, key) => {
          return (
            <motion.div
              key={key}
              className='mr-7 mb-5 text-center md:mr-15'
              initial={{ color: '#a25b2e', letterSpacing: '0em', opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ color: '#552811', letterSpacing: '0.1em' }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
                opacity: { delay: key * 0.2 }
              }}
            >
              <Link
                className='font-inter font-bold hover:cursor-pointer'
                href={`/cafe/${encodeURIComponent(data.slug)}`}
              >
                <motion.img
                  src={data.miniatura}
                  className='"w-[110px] h-[110px] cursor-pointer md:h-[200px] md:w-[200px]'
                  initial={{ rotate: 10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  whileHover={{
                    scale: 1.06,
                    rotate: -2, // si quieres rotar en hover
                    transition: {
                      scale: { duration: 0.4, ease: 'easeInOut' },
                      rotate: { duration: 0.4, ease: 'easeInOut' }
                    }
                  }}
                  transition={{
                    ease: 'easeOut',
                    duration: 1,
                    scale: { duration: 0.4, ease: 'easeInOut' },
                    rotate: { ease: 'easeInOut', delay: key * 0.2 },
                    opacity: {
                      duration: 0.6,
                      ease: 'easeOut',
                      delay: key * 0.2
                    }
                  }}
                ></motion.img>
                <p className='mt-2 cursor-pointer'>{data.titulo}</p>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

//hover:scale-104 hover:-rotate-5

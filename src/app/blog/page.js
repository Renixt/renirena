import React from 'react'
import './style.css'
import Link from 'next/link'

export default function page() {
  const entries = [
    {
      title: '> Fiestas 2025',
      href: '/blog/fiestas2025',
      date: '01/01/26',
      styles: 'font-mansalva'
    },
    {
      title: '> Baños',
      href: '/blog/baños',
      date: '08/02/26',
      styles: 'font-mansalva'
    }
  ]
  return (
    <div>
      <div className='flex h-screen flex-col content-center items-center justify-center bg-[url("/fots/IM000896.JPG")] font-mono'>
        <h1>LA VIE</h1>
        <div className='m-10 flex h-2/3 shadow-xl'>
          <div className='bg-notebook w-120 rounded-md border-4 border-r-0 border-red-800'>
            {entries.map((entrie, index) => (
              <Link
                href={entrie.href}
                key={index}
                className='flex justify-between text-blue-950 hover:text-pink-700 hover:underline'
              >
                <p className={`ml-3 ${entrie.styles ?? ''}`}>{entrie.title}</p>

                <p className={`mr-3 ${entrie.styles ?? ''}`}>{entrie.date}</p>
              </Link>
            ))}
          </div>

          <div className='bg-notebook w-120 rounded-md border-4 border-l-1 border-red-800 border-l-amber-200'></div>
        </div>
      </div>
    </div>
  )
}

/*BLOG MENU
      <a href='/blog/fiestas2025'>FIESTAS 2025</a> */

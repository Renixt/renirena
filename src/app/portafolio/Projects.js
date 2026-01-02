'use client'
import { motion } from 'framer-motion'

export default function Projects() {
  var projects = [
    {
      title: 'Personal Website',
      description:
        'I built a personal website to explore my creativity through web development. I develop new ideas constantly, such as a section for reviewing coffe places in my city, a section to explore the pictures I have taken with my vintage camera, and a new section for saving new movies as I watch them.',
      technologies: ['Next.js', 'Framer Motion', 'Supabase']
    }
  ]
  return (
    <div className='mx-auto mt-20 flex flex-col items-center text-black'>
      <h1 className='font-mansalva text-5xl font-extrabold text-[#0e073a] md:text-7xl'>
        My Projects
      </h1>
      <div className='flex flex-row flex-wrap content-center items-center justify-center'>
        <div className='relative min-h-[600px] min-w-3xl'>
          <motion.div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            viewport={{ amount: 'all', margin: '-100px', once: true }}
            transition={{ duration: 0 }}
          >
            <img src='/portafolio/paperball1.png' className='h-52' />
          </motion.div>

          <motion.div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 'all', margin: '-40px', once: true }}
            transition={{ duration: 0 }}
          >
            <img src='/portafolio/paper2.png' className='h-96 w-auto' />
          </motion.div>

          <motion.div
            className='absolute top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 bg-[url("/portafolio/back2.jpeg")] p-5'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 'all', margin: '-20px', once: true }}
            transition={{ duration: 0, delay: 0.4 }}
          >
            <img className='fit' src='/portafolio/renirena3.png'></img>
            <h2>Personal Website</h2>
            <p>
              I built a personal website to explore my creativity through web
              development. I develop new ideas constantly, such as a section for
              reviewing coffe places in my city, a section to explore the
              pictures I have taken with my vintage camera, and a new section
              for saving new movies as I watch them.
            </p>
            <div className='flex flex-nowrap gap-2'>
              <p>Nexts.js</p>
              <p>Framer Motion</p>
              <p>Supabase</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='h-96'></div>
      <div className='h-96'></div>
      <div className='h-96'></div>
    </div>
  )
}

/*
amount:all -> only run when the entire element enters the screen 
margin: '200px' -> gives a condition to allow a margin offset of 200 px
once: true
}*/

/*initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            viewport={{ amount: 'all', margin: '-200px' }}
            transition={{ duration: 0 }} */

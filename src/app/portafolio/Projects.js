'use client'
import { motion } from 'framer-motion'

export default function Projects() {
  var projects = [
    {
      title: 'Personal Website',
      description: (
        <>
          I built a personal website to explore my creativity through web
          development. I constantly add new ideas, such as a section for{' '}
          <strong>reviewing coffee shops</strong> in my city,{' '}
          <strong>a gallery</strong> to showcase photos taken with my camera and
          a feature for saving and <strong>tracking movies</strong> as I watch
          them.
        </>
      ),
      technologies: ['Next.js', 'Framer Motion', 'Supabase'],
      drawing: '/portafolio/renirena3.png',
      complete: '/portafolio/renirena.png',
      url: 'https://renirena.vercel.app'
    },
    {
      title: 'Corporate Web Development',
      description:
        'One of the websites I designed in Figma and the developed in React + Vite. Focused on showcasing services clearly and atracting users. ',
      technologies: ['React + Vite', 'Framer Motion', 'Figma'],
      drawing: '/portafolio/corp_drawing.png',
      complete: '/portafolio/coorp.png',
      url: 'https://www.gpodelaconcha.com.mx/'
    }
  ]
  return (
    <div className='mx-auto mt-20 flex flex-col items-center text-black'>
      <div className='flex'>
        <p className='font-mansalva -rotate-45 text-7xl font-extrabold text-[#0e073a]'>
          '<span className='text-[#c83838]'>´</span>
        </p>
        <h1 className='font-mansalva text-5xl font-extrabold text-[#0e073a] md:text-7xl'>
          My Projects
        </h1>{' '}
        <p className='font-mansalva mb-10 rotate-45 text-7xl font-extrabold text-[#0e073a]'>
          '<span className='text-[#c83838]'>´</span>
        </p>
      </div>

      <div className='flex flex-row flex-wrap content-center items-center justify-center'>
        {/*PROJECT CARD DIV */}
        {projects.map((project, i) => (
          <div key={i} className='relative min-h-[600px] min-w-[500px]'>
            {/*FIRST PAPER BALL FRAME */}
            <motion.div
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              viewport={{ amount: 'all', margin: '-110px', once: true }}
              transition={{ duration: 0, delay: i * 0.1 }}
            >
              <img src='/portafolio/paperball1.png' className='h-52' />
            </motion.div>
            {/*SECOND PAPER BALL FRAME */}
            <motion.div
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 'all', margin: '-110px', once: true }}
              transition={{ duration: 0, delay: i * 0.1 }}
            >
              <img
                src='/portafolio/paper2.png'
                className='h-auto w-[500px] md:w-[650px]'
              />
            </motion.div>

            <a href={project.url} target='_blank' rel='noopener noreferrer'>
              {' '}
              <motion.div
                className='absolute top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 bg-[url("/portafolio/back2.jpeg")] p-6 drop-shadow-md/40 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-2'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 'all', margin: '-20px', once: true }}
                transition={{ duration: 0, delay: i * 0.4 }}
              >
                {/*GROUP HOVER FOR THE PICTURE */}
                <div className='group relative h-50 w-full overflow-hidden'>
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-opacity duration-300'
                    style={{ backgroundImage: `url(${project.drawing})` }}
                  />

                  <div
                    className='absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:drop-shadow-lg'
                    style={{ backgroundImage: `url(${project.complete})` }}
                  />
                </div>

                <h2 className='my-5 text-4xl font-extrabold text-gray-800'>
                  {project.title}
                </h2>
                <p className='text-gray-900'>{project.description}</p>
                <div className='mt-2 flex flex-row content-center justify-center gap-3 text-sm text-[#c83838]'>
                  {project.technologies.map((tech, i) => (
                    <p key={i} className='p-1'>
                      {tech}
                    </p>
                  ))}
                </div>
              </motion.div>
            </a>
          </div>
        ))}
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
            transition={{ duration: 0 }} 
            
                          <img className='fit' src='/portafolio/renirena3.png'></img>
*/

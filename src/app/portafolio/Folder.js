'use client'
import './styles.css'

import {
  IconArcheryArrow,
  IconPoint,
  IconPointFilled,
  IconStar,
  IconStarFilled
} from '@tabler/icons-react'
import { useState } from 'react'
export default function Folder() {
  var experience = [
    {
      title: 'Web and Biomedical Applications Development',
      place: 'UNAM - National Autonomous University of Mexico',
      time: 'January 2025 – August 2025 ',
      bulletpoints: [
        'Collaborated with researchers to translate clinical and research needs into functional web solutions.',
        <span key='patient-systems'>
          Contributed to the development of{' '}
          <strong>patient information management systems </strong>
          for a Neurodevelopment Research Unit.
        </span>,
        <span key='patient-systems-tech'>
          Implemented frontend and backend solutions, using <strong>PHP</strong>{' '}
          with <strong>Laravel</strong> as the framework.
        </span>
      ]
    },
    {
      title: 'Front-End Development and Web Design',
      place: 'NeuroNet',
      time: 'January 2025 – September 2025 ',
      bulletpoints: [
        'Designed and developed atractive websites for clients in the real estate and corporate sectors. ',
        <span key='web-design'>
          Created UI/UX designs in Figma and implemented them using{' '}
          <strong>React.js</strong> or <strong>Next.js </strong>with a focus on
          usability and responsivness.
        </span>
      ]
    },
    {
      title: 'Laravel Full-stack Development.',
      place: 'CodeNok ',
      time: 'August 2025 – December 2025',
      bulletpoints: [
        <span key='codenok'>
          Developed information management systems for multiple sectors in the
          industry using <strong>Laravel.</strong>
        </span>,
        <span key='codenok-tech'>
          Implemented full-stack features including authentication, CRUD
          operations, and database integration.
        </span>
      ]
    }
  ]

  var education = [
    {
      title: 'B.S in Software Engineering | GPA: 94/100',
      place: 'Universidad Autónoma de Querétaro, Faculty of Informatics.',
      time: 'August 2021 - Present',
      bulletpoints: [
        <>
          Strong foundations in software requirements analysis, databases design
          and software development.
        </>,
        <>
          Skilled in <strong>critical thinking</strong>,{' '}
          <strong>problem solving</strong> and translating requirements into
          technical solutions.
        </>,
        <>
          Gained experience with multiple programming languages:{' '}
          <strong>PHP, JavaScript, Python, Java, SQL</strong>.
        </>
      ]
    },
    {
      title: 'Oracle Database Fundamentals Diploma ',
      place: 'Universidad Autónoma de Querétaro, Faculty of Informatics.',
      time: 'October 2025 – Present'
    }
  ]
  const [tab, setTab] = useState('experience')
  const tabsData = {
    experience,
    education
  }
  const currentData = tabsData[tab] || []

  const handleTabChange = tab => {
    setTab(tab)
  }
  return (
    <div className='relative z-10 mx-auto mt-5 flex w-full max-w-6xl flex-col items-start px-4 transition-transform duration-500 ease-in-out hover:rotate-0 md:rotate-2 md:px-0'>
      <div className='flex gap-2'>
        {' '}
        <button
          className={`h-12 w-fit rounded bg-amber-50 px-5 pt-2 shadow-lg hover:cursor-pointer hover:text-[#c83838] md:h-10 ${tab === 'experience' ? 'text-[#c83838]' : 'text-black'}`}
          value='work'
          onClick={() => handleTabChange('experience')}
        >
          <h1 className='font-mansalva line text-sm uppercase md:text-lg'>
            Work Experience
          </h1>
        </button>
        <button
          className={`h-12 w-fit rounded bg-pink-100 px-5 pt-2 shadow-lg hover:cursor-pointer hover:text-[#c83838] md:h-10 ${tab === 'education' ? 'text-[#c83838]' : 'text-black'}`}
          value='education'
          onClick={() => handleTabChange('education')}
        >
          <h1 className='font-mansalva text-sm uppercase md:text-lg'>
            Education <span className='text-[#c83838]'></span>
          </h1>
        </button>
      </div>

      <div
        className={`mb-10 min-h-120 w-full rounded px-6 pt-10 text-gray-800 shadow-lg md:p-10 ${tab === 'education' ? 'bg-pink-100' : 'bg-amber-50'}`}
      >
        {currentData.map((job, j) => (
          <div className='mb-5 flex w-full gap-2' key={j}>
            <div className='mt-1'>
              <IconStarFilled size={20} color='#1F2937' />
            </div>
            <div className='w-full'>
              <div className='flex justify-between text-lg font-black'>
                <h2> {job.title}</h2>{' '}
                <span className='hidden text-sm font-light text-gray-600 md:block'>
                  {job.time}
                </span>
              </div>

              <h3 className='mb-1 hidden text-gray-600 italic md:block'>
                {job.place}
              </h3>
              {job.bulletpoints
                ? job.bulletpoints.map((point, i) => (
                    <div className='flex items-start gap-1' key={i}>
                      <span className='mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center'>
                        <IconPointFilled size={15} color='#1F2937' />
                      </span>
                      <p className='leading-relaxed'>{point}</p>
                    </div>
                  ))
                : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

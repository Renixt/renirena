import './styles.css'
import Hero from './Hero'
import Navbar from './Navbar'
import {
  IconArcheryArrow,
  IconPoint,
  IconPointFilled,
  IconStar,
  IconStarFilled
} from '@tabler/icons-react'

export default function portafolio() {
  var experience = [
    {
      title: 'Web and Biomedical Applications Development',
      place: 'UNAM - National Autonomous University of Mexico',
      time: 'January 2025 – August 2025 ',
      bulletpoints: [
        'Contributed to the development of patient information management systems for a Neurodevelopment Research Unit.',
        'Implemented frontend and backend solutions, using PHP with the Laravel framework.',
        'Collaborated with researchers to translate clinical and research needs into functional web solutions.'
      ]
    },
    {
      title: 'Front-End Development and Web Design',
      place: 'NeuroNet',
      time: 'January 2025 – September 2025 ',
      bulletpoints: [
        'Designed and developed atractive websites for clients in the real estate and corporate sectors. ',
        'Created UI/UX designs in Figma and implemented them using React.js or Next.js with a focus on usability and responsivness.'
      ]
    },
    {
      title: 'Laravel Full-stack Development.',
      place: 'CodeNok ',
      time: 'August 2025 – December 2025',
      bulletpoints: [
        'Development of information management systems for multiple sectors in the industry.',
        'Implemented backend and frontend solutions, using PHP with the Laravel framework. '
      ]
    }
  ]

  var education = [
    { title: '', place: '', time: '', bulletpoints: ['', '', ''] }
  ]

  return (
    <div className='font-source-code-pro portafolio-bg min-h-screen overflow-hidden'>
      <div className='absolute left-20 -ml-0.5 h-screen w-0.5 bg-[#da6d6d]'></div>
      <Navbar />
      <hr className='border-1 border-[#da6d6d]' />

      <Hero />
      <div className='mx-auto mt-5 flex max-w-1/2 rotate-2 flex-col items-start transition-transform ease-in-out hover:-rotate-2'>
        <div className='flex gap-2'>
          {' '}
          <div className='h-10 w-fit rounded bg-amber-50 px-5 pt-2 text-black'>
            <h1 className='font-mansalva text-lg uppercase'>
              Work <span className='text-[#c83838]'>Experience</span>
            </h1>
          </div>
          <div className='h-10 w-fit rounded bg-pink-50 px-5 pt-2 text-black'>
            <h1 className='font-mansalva text-lg uppercase'>
              Education <span className='text-[#c83838]'></span>
            </h1>
          </div>
        </div>

        <div className='mb-10 bg-amber-50 p-10 text-gray-800 shadow-lg'>
          {experience.map((job, j) => (
            <div className='mb-5 flex gap-2' key={j}>
              <div className='mt-1'>
                <IconStarFilled size={20} color='#1F2937' />
              </div>
              <div>
                <div className='flex justify-between text-lg font-black'>
                  <h2> {job.title}</h2>{' '}
                  <span className='text-sm text-gray-600'>{job.time}</span>
                </div>

                <h3 className='mb-1 italic'>{job.place}</h3>
                {job.bulletpoints.map((point, i) => (
                  <div className='flex items-start gap-1' key={i}>
                    <span className='mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center'>
                      <IconPointFilled size={15} color='#1F2937' />
                    </span>
                    <p className='leading-relaxed'>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

//  experience = [{ title: '', place: '', time: '', bulletpoints: ['', '', ''] }]

import './styles.css'
import Hero from './Hero'
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconFileCvFilled
} from '@tabler/icons-react'
export default function portafolio() {
  return (
    <div className='font-source-code-pro portafolio-bg min-h-screen overflow-hidden'>
      <div className='absolute left-20 -ml-0.5 h-screen w-0.5 bg-[#da6d6d]'></div>
      <div className='mx-5 my-5 flex justify-end-safe gap-2'>
        <IconBrandLinkedinFilled
          size={30}
          color='#1F2937'
          className='transition-transform hover:scale-105 hover:cursor-pointer hover:fill-[#2d516f]'
        />
        <IconBrandGithubFilled
          size={30}
          color='#1F2937'
          className='transition-transform hover:scale-105 hover:cursor-pointer hover:fill-[#2d496f]'
        />
        <IconFileCvFilled
          size={30}
          color='#1F2937'
          className='transition-transform hover:scale-105 hover:cursor-pointer hover:fill-[#2d496f]'
        />
      </div>
      <hr className='border-gray-400' />

      <Hero />
      <hr className='border-gray-400' />
    </div>
  )
}

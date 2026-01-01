import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconFileCvFilled
} from '@tabler/icons-react'
export default function Navbar() {
  return (
    <div className='mx-5 my-5 flex justify-end-safe gap-2'>
      <a
        href='https://www.linkedin.com/in/renata-castillo-390116323/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {' '}
        <IconBrandLinkedinFilled
          size={30}
          color='#0e073a'
          className='transition-transform hover:scale-105 hover:cursor-pointer hover:fill-[#2d516f]'
        />
      </a>
      <a
        href='https://github.com/Renixt'
        target='_blank'
        rel='noopener noreferrer'
      >
        {' '}
        <IconBrandGithubFilled
          size={30}
          color='#0e073a'
          className='transition-transform hover:scale-105 hover:cursor-pointer hover:fill-[#2d496f]'
        />
      </a>

      <a
        href='/portafolio/Renata Castillo - Software Developer CV.pdf'
        target='_blank'
        rel='noopener noreferrer'
      >
        {' '}
        <IconFileCvFilled
          size={30}
          color='#0e073a'
          className='transition-transform hover:scale-105 hover:cursor-pointer hover:fill-[#2d496f]'
        />
      </a>
    </div>
  )
}

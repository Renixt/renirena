import { IconMailFast } from '@tabler/icons-react'

export default function Postit() {
  return (
    <div className='hidden md:block'>
      <div className='absolute top-25 -left-35 z-10 flex h-80 w-80 rotate-12 flex-col items-center overflow-hidden bg-amber-300 p-5 text-black shadow-xl transition-all duration-300 ease-in-out hover:left-6 hover:rotate-0'>
        <h1 className='font-mansalva rotate-2 text-4xl font-bold underline underline-offset-4'>
          Contact Info
        </h1>
        <div className='mt-10 flex gap-1'>
          <IconMailFast stroke={0.8} size={40} className='-rotate-12' />{' '}
          <a
            className='-rotate-3 text-sm font-medium hover:underline'
            href='mailto:renata_castillo_@outlook.com'
          >
            renata_castillo_@outlook.com
          </a>
        </div>
      </div>
    </div>
  )
}

import {
  IconMapPinFilled,
  IconPointerFilled,
  IconStarFilled
} from '@tabler/icons-react'
export default function Hero() {
  return (
    <div className='mx-auto w-fit'>
      <div className='flex flex-row gap-11'>
        <div className='flex items-center border-2 border-y-0 border-r-0 border-l-0 pl-11 transition-transform ease-in-out hover:scale-105 hover:rotate-12'>
          <p className='font-mansalva -rotate-45 text-7xl font-extrabold text-gray-800'>
            '<span className='text-[#c83838]'>´</span>
          </p>
          <img
            src='/portafolio/renisvg.svg'
            className='h-55 transition-transform ease-in-out hover:scale-105 hover:-rotate-12'
          ></img>
          <p className='font-mansalva mb-10 rotate-45 text-7xl font-extrabold text-gray-800'>
            '<span className='text-[#c83838]'>´</span>
          </p>
        </div>

        <div className='info px-11 py-16'>
          <h1 className='font-mansalva text-7xl font-extrabold text-gray-800'>
            Renata Castillo
          </h1>
          <div className='mt-2 ml-4'>
            <div className='mb-1 flex items-center gap-4 transition-transform hover:scale-101'>
              <IconStarFilled size={20} color='#1F2937' />
              <h2 className='text-gray-700'>Software Engineer</h2>
            </div>
            <div className='mb-1 flex items-center gap-4 transition-transform hover:scale-101'>
              <IconMapPinFilled size={20} color='#1F2937' />
              <h3 className='text-gray-700'>Queretaro, México</h3>
            </div>

            <div className='mb-1 flex items-start gap-4 transition-transform hover:scale-101'>
              <IconPointerFilled size={20} color='#1F2937' />
              <h3 className='leading-tight text-gray-700'>
                Looking for intership opportunities{' '}
                <span className='block'> and open to relocation. </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

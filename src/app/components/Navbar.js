export default function Navbar() {
  return (
    <div className='relative z-10 flex flex-row'>
      <a href='/'>
        {' '}
        <h1 className='font-inter p-5 text-xl font-[700] text-white hover:scale-105'>
          renirena
        </h1>
      </a>
      <div className='flex h-15 w-full flex-row justify-end-safe p-2'>
        <a href='/cafe'>
          {' '}
          <img
            src='/imagenes/coffe1.png'
            className='h-12 transition-transform duration-300 ease-in-out hover:scale-107 hover:cursor-pointer'
          ></img>
        </a>
        <a href='/camarita'>
          {' '}
          <img
            src='/imagenes/camara2.png'
            className='h-10 rotate-3 transition-transform duration-300 ease-in-out hover:scale-107 hover:cursor-pointer'
          ></img>
        </a>
        <a href='/escine'>
          {' '}
          <img
            src='/imagenes/escine2.png'
            className='mx-3 h-15 transition-transform duration-300 ease-in-out hover:scale-107 hover:cursor-pointer'
          ></img>
        </a>
        <br></br>
      </div>
    </div>
  )
}

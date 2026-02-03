import { IconDeer } from '@tabler/icons-react'

export default function Navidad() {
  const intercambio = [
    {
      img: '/fiestas2025/IM000039.JPG',
      desc: 'Fiestas 2025 – Tia recibiendo una agenda'
    },
    {
      img: '/fiestas2025/IM000040.JPG',
      desc: 'Fiestas 2025 – Abrazo'
    },
    {
      img: '/fiestas2025/IM000041.JPG',
      desc: 'Fiestas 2025 – Naty recibe cuaderno de dibujo'
    },
    {
      img: '/fiestas2025/IM000042.JPG',
      desc: 'Fiestas 2025 – Tia erica y su baileys'
    },
    {
      img: '/fiestas2025/IM000043.JPG',
      desc: 'Fiestas 2025 – Roxana con calcetines nuevos'
    },
    {
      img: '/fiestas2025/IM000044.JPG',
      desc: 'Fiestas 2025 – Aniz del Mono'
    },
    {
      img: '/fiestas2025/IM000045.JPG',
      desc: 'Fiestas 2025 – Nueva cartera para la abuela'
    },
    {
      img: '/fiestas2025/IM000046.JPG',
      desc: 'Fiestas 2025 – Un gran regalo tejido'
    },
    {
      img: '/fiestas2025/IM000047.JPG',
      desc: 'Fiestas 2025 – Parece alcohol pero es un shampoo'
    }
  ]

  const galeria = [
    {
      img: '/fiestas2025/IM000031.JPG',
      desc: 'Fiestas 2025 – Abrazo'
    },
    {
      img: '/fiestas2025/IM000032.JPG',
      desc: 'Fiestas 2025 – Naty recibe cuaderno de dibujo'
    },
    {
      img: '/fiestas2025/IM000033.JPG',
      desc: 'Fiestas 2025 – Tia erica y su baileys'
    },
    {
      img: '/fiestas2025/IM000034.JPG',
      desc: 'Fiestas 2025 – Roxana con calcetines nuevos'
    },
    {
      img: '/fiestas2025/IM000035.JPG',
      desc: 'Fiestas 2025 – Aniz del Mono'
    },
    {
      img: '/fiestas2025/IM000036.JPG',
      desc: 'Fiestas 2025 – Nueva cartera para la abuela'
    },
    {
      img: '/fiestas2025/IM000037.JPG',
      desc: 'Fiestas 2025 – Un gran regalo tejido'
    },
    {
      img: '/fiestas2025/IM000038.JPG',
      desc: 'Fiestas 2025 – Parece alcohol pero es un shampoo'
    },
    {
      img: '/fiestas2025/IM000049.JPG',
      desc: 'Fiestas 2025 – Imagen adicional'
    },
    {
      img: '/fiestas2025/IM000050.JPG',
      desc: 'Fiestas 2025 – Imagen adicional'
    }
  ]
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex items-center'>
        <IconDeer size={'60px'} color='#692626' />
        <h1 className='text- py-5 font-serif text-3xl font-extrabold text-[rgb(105,38,38)] md:text-7xl'>
          NAVIDAD FAMILIAR 2025
        </h1>
      </div>

      <br className='bg-amber-900' />
      <div className='flex w-full flex-col items-center px-10 pt-5 pb-20'>
        <h2 className='w-fit bg-amber-100 p-2 font-serif text-xl font-extrabold text-amber-900'>
          EL MENU
        </h2>
        <div className='flex flex-wrap items-baseline justify-center'>
          <div className='mb-10 flex flex-col items-center justify-center'>
            <img
              src='/fiestas2025/IM000048.JPG'
              className='h-50 shadow-md md:h-96'
            ></img>
            <p className='img-des flex w-80 text-center transition-transform duration-200 ease-in-out hover:scale-101'>
              fig 1. Pavo a la naranja decorado con cabeza y patas de papel
              aluminio, cortesia de tias.
            </p>
          </div>
          <div className='mb-10 flex flex-col items-center justify-center'>
            <img
              src='/fiestas2025/IM000052.JPG'
              className='h-50 shadow-md md:h-96'
            ></img>
            <p className='img-des flex w-60 text-center'>
              fig 2. Pastel de frutos secos y brandy elaborado por mama.
            </p>
          </div>
          <div className='mb-10 flex flex-col items-center justify-center'>
            <img
              src='/fiestas2025/IMG_6813.jpg'
              className='h-70 shadow-md md:h-96'
            ></img>
            <p className='img-des flex w-60 text-center'>
              fig 3. Mi plato en la primera ronda.
            </p>
          </div>
        </div>
      </div>

      <div className='c-back flex w-full flex-col items-center justify-center border-4 border-amber-900 p-10 pb-20'>
        <h2 className='w-fit bg-amber-100 p-2 font-serif text-xl font-extrabold text-amber-900'>
          LOS INVITADOS
        </h2>
        <div className='flex flex-wrap'>
          <img
            src='/fiestas2025/IM000051.JPG'
            className='w-2xl shadow-md'
          ></img>

          <img
            src='/fiestas2025/IM000032.JPG'
            className='w-2xl shadow-md'
          ></img>
        </div>
      </div>

      <div className='mx-auto my-10 flex max-w-3/4 flex-col items-center justify-center'>
        <h2 className='w-fit bg-amber-100 p-2 font-serif text-xl font-extrabold text-amber-900'>
          EL INTERCAMBIO
        </h2>
        <div className='flex flex-wrap justify-center'>
          {intercambio.map((foto, key) => (
            <div className='group relative' key={key}>
              <img src={foto.img} className='w-90'></img>
              <p className='absolute bottom-0 left-0 p-1 font-serif text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                {foto.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='my-10 flex flex-col flex-wrap shadow-md md:flex-row'>
        {' '}
        <div className='flex flex-col items-center justify-center bg-[#e6ae60] p-10 font-serif'>
          <h2 className='w-fit p-2 text-xl font-extrabold text-amber-900'>
            EL RESUMEN
          </h2>
          <div>
            <p className='px-5 text-center text-amber-900 md:w-2xl'>
              Gran navidad donde la mesa de niños y adultos fue fusionada por
              primera vez en una misma. 2025 fue el inicio de ojala nuevas
              tradiciones divertidas para las siguientes navidades. <br /> Se
              jugaron diversos juegos para competir en equipo, donde salieron a
              la luz estrategias tramposas, buenas ideas y sobre todo risas y
              gritos. <br /> Con un menu digno de los mejores restaurantes,
              cenamos todos juntos, un poco apretados en el nuevo espacio y
              hambrientos despues de competir en equipos.
            </p>
          </div>
        </div>
        <img src='/fiestas2025/cats.png' className='m-10 h-80 md:m-0'></img>
      </div>

      {/*GALERIA */}
      <div className='c-back flex w-full flex-col items-center justify-center border-4 border-amber-900 p-10'>
        <h2 className='w-fit bg-amber-100 p-2 font-serif text-xl font-extrabold text-amber-900'>
          GALERIA
        </h2>
        <div className='container flex flex-wrap justify-center'>
          {galeria.map((foto, key) => (
            <div className='group relative' key={key}>
              <img src={foto.img} className='h-50 md:h-96'></img>
              <p className='absolute bottom-0 left-0 p-1 font-serif text-white opacity-0 transition-opacity duration-300 ease-in-out'>
                {foto.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

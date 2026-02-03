import {
  IconChristmasBall,
  IconChristmasTree,
  IconDeer
} from '@tabler/icons-react'

export default function Anonuevo() {
  const robos = [
    {
      img: '/fiestas2025/newyear/IM000059.JPG',
      desc: 'AñoNuevo 2025 – El primer botin'
    },
    {
      img: '/fiestas2025/newyear/IM000060.JPG',
      desc: 'AñoNuevo 2025 – Familia'
    },

    {
      img: '/fiestas2025/newyear/IM000063.JPG',
      desc: 'AñoNuevo 2025 – Rivalidades pt.1'
    },
    {
      img: '/fiestas2025/newyear/IM000066.JPG',
      desc: 'AñoNuevo 2025 – Awuela'
    },
    {
      img: '/fiestas2025/newyear/IM000067.JPG',
      desc: 'AñoNuevo 2025 – Awuela pt.2'
    },
    {
      img: '/fiestas2025/newyear/IM000068.JPG',
      desc: 'AñoNuevo 2025 – Entre risas y robos'
    },
    {
      img: '/fiestas2025/newyear/IM000069.JPG',
      desc: 'AñoNuevo 2025 – Robo a mano armada'
    },
    {
      img: '/fiestas2025/newyear/IM000070.JPG',
      desc: 'AñoNuevo 2025 – Rivalidades pt.2'
    },
    {
      img: '/fiestas2025/newyear/IM000071.JPG',
      desc: 'AñoNuevo 2025 – El Malevolo'
    },
    {
      img: '/fiestas2025/newyear/IM000072.JPG',
      desc: 'AñoNuevo 2025 – Violencia intrafamiliar'
    }
  ]

  const galeria = [
    {
      img: '/fiestas2025/newyear/IM000073.JPG',
      desc: 'AñoNuevo 2025 – Abrazo'
    },
    {
      img: '/fiestas2025/newyear/IM000076.JPG',
      desc: 'AñoNuevo 2025 – Naty recibe cuaderno de dibujo'
    },
    {
      img: '/fiestas2025/newyear/IM000077.JPG',
      desc: 'AñoNuevo 2025 – Tia erica y su baileys'
    },
    {
      img: '/fiestas2025/newyear/IM000078.JPG',
      desc: 'AñoNuevo 2025 – Roxana con calcetines nuevos'
    },
    {
      img: '/fiestas2025/newyear/IM000079.JPG',
      desc: 'AñoNuevo 2025 – Aniz del Mono'
    }
  ]
  return (
    <div className='flex flex-col items-center justify-center bg-[#b3c5ad]'>
      <div className='flex items-center'>
        <IconChristmasBall size={'60px'} color='#004b0a' />
        <h1 className='text- py-5 font-serif text-3xl font-extrabold text-[rgb(0,75,10)] md:text-7xl'>
          AÑO NUEVO 2025
        </h1>
      </div>

      <br className='bg-amber-900' />
      <div className='flex w-full flex-col items-center px-10 pt-5 pb-20'>
        <h2 className='w-fit bg-white p-2 font-serif text-xl font-extrabold text-[rgb(0,75,10)]'>
          EL APERITIVO DE LA NOCHE
        </h2>
        <div className='flex flex-wrap items-baseline justify-center'>
          <div className='mb-10 flex flex-col items-center justify-center'>
            <img
              src='/fiestas2025/IM000053.JPG'
              className='h-50 shadow-md md:h-96'
            ></img>
            <p className='img-des flex w-80 text-center'>
              fig 1. Queso philadelphia con galletitas y ostiones, gracias
              natyyy :P.
            </p>
          </div>
          <div className='mb-10 flex flex-col items-center justify-center'>
            <img
              src='/fiestas2025/newyear/IM000054.JPG'
              className='h-50 shadow-md md:h-96'
            ></img>
            <p className='img-des flex w-60 text-center'>
              fig 2. La abuela prueba y aprueba los aperitivos.
            </p>
          </div>
          <div className='mb-10 flex flex-col items-center justify-center'>
            <img
              src='/fiestas2025/newyear/IMG00009.jpg'
              className='h-70 shadow-md md:h-96'
            ></img>
            <p className='img-des flex w-60 text-center'>fig 3. P O N C H E.</p>
          </div>
        </div>
      </div>

      <div className='ny-back flex w-full flex-col items-center justify-center border-4 border-amber-900 p-10 pb-20'>
        <h2 className='w-fit bg-amber-100 p-2 font-serif text-xl font-extrabold text-[rgb(0,75,10)]'>
          ¡¡¡EL INVITADO ESPECIAL!!!!
        </h2>
        <div className='flex flex-wrap'>
          <img
            src='/fiestas2025/newyear/IM000055.JPG'
            className='w-2xl shadow-md'
          ></img>
        </div>
      </div>

      <div className='mx-auto my-10 flex max-w-3/4 flex-col items-center justify-center'>
        <h2 className='w-fit bg-amber-100 p-2 font-serif text-xl font-extrabold text-[rgb(0,75,10)]'>
          LADRONES DE REGALOS
        </h2>
        <div className='flex flex-wrap justify-center'>
          {robos.map((foto, key) => (
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
        <div className='flex flex-col items-center justify-center bg-[#b69c8a] p-10 font-serif'>
          <h2 className='w-fit p-2 text-xl font-extrabold text-[rgb(87,26,26)]'>
            EL RESUMEN
          </h2>
          <div>
            <p className='px-5 text-center text-[rgb(87,26,26)] md:w-2xl'>
              Esta noche se llevo a cabo uno de los mayores atracos de la
              historia, donde salieron a la luz diversos robos sin piedad, risas
              malevolas y sed de venganza. <br /> Entre risas, gritos y dados
              rojos, la avaricia reinó unas cuantas horas dentro de la casa.
              Sinduda una gran despedida al 2025, esperando haber fundado nuevas
              tradiciones y esperando haber sembrado bonitos recuerdos.
            </p>
          </div>
        </div>
        <img src='/fiestas2025/cats.png' className='m-10 h-80 md:m-0'></img>
      </div>

      {/*GALERIA */}
      <div className='ny-back flex w-full flex-col items-center justify-center border-4 border-amber-900 p-10'>
        <h2 className='w-fit bg-amber-100 p-2 font-serif text-xl font-extrabold text-[rgb(0,75,10)]'>
          EL BOTIN FINAL
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

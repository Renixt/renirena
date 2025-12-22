import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import ThemeContext from '../context/ThemeContext'
export default function Palomitas() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const palomitas = [
    { x: 'bottom-10', y: 'left-10', h: 'md:h-40', rot: 'rotate-0' },

    { x: 'top-30', y: 'right-5', h: 'md:h-35', rot: 'rotate-12' },
    { x: 'bottom-5', y: 'right-10', h: 'md:h-25', rot: 'rotate-45' },
    { x: 'top-1/2', y: 'right-5', h: 'h-15', rot: 'rotate-90' },
    { x: 'bottom-50', y: 'left-7', h: 'h-20', rot: '-rotate-45' }
  ]

  return (
    <div>
      {palomitas.map((pos, i) => (
        <button key={i} onClick={toggleTheme}>
          <motion.img
            key={i}
            src={theme === 'light' ? '/escine/1.png' : '/escine/2.png'}
            className={`fixed ${pos.h} ${pos.x} ${pos.y} ${pos.rot} z-50 h-10`}
            initial={{ rotate: 10, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: [1, 1.02, 1] }}
            transition={{
              ease: 'easeOut',
              duration: 1,
              scale: { duration: 0.5, ease: 'easeInOut', repeat: Infinity },
              rotate: { ease: 'easeInOut', delay: i * 0.1 },
              opacity: {
                duration: 0.2,
                ease: 'easeOut',
                delay: i * 0.2
              }
            }}
            whileHover={{
              scale: 1.3,
              rotate: -2, // si quieres rotar en hover
              transition: {
                scale: { duration: 0.01, ease: 'easeInOut' },
                rotate: { duration: 0.01, ease: 'easeInOut' }
              }
            }}
          ></motion.img>
        </button>
      ))}
    </div>
  )
}

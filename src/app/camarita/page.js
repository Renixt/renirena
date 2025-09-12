'use client'
import Navbar from '../components/Navbar'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import {Camara} from '../components/Camara'

export default function Camarita() {
  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-gradient-to-bl from-[#f6dfb2] to-[#FFFFFF]'>
      <div className='pointer-events-none absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:20px_20px]'></div>
      <div className='pointer-events-none absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(249,173,44,0.3)_40%,rgba(248,250,252,1)_100%)]'></div>

      <Navbar />

      <div className='h-[100vh] w-[100vw]'>
        <Canvas>
          <Environment preset='apartment'/>
          <OrbitControls />

          <Camara  scale={0.15} />
        </Canvas>
      </div>
    </div>
  )
}

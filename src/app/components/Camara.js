import React, { use, useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three";


export function Camara({ axis = "y", ...props }) {
  const { nodes, materials } = useGLTF('/polaroid_image_systemspectra.glb')
 const ref = useRef();

  const SPEED = .3; // radianes por segundo

useFrame((_, delta) => {
  if (!ref.current) return;
  ref.current.rotation.y += SPEED * delta;
});
  return (
    <group ref={ref} {...props} dispose={null} 
    >
      <group rotation={[-Math.PI / 2, 0.007, 3.109]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Polaroid_O_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Polaroid_O_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Polaroid_O_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Polaroid_O_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Polaroid_O_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Polaroid_O_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Polaroid_O_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.glasses}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/polaroid_image_systemspectra.glb')

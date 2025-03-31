import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'
import { MeshStandardMaterial, TextureLoader, Clock } from 'three'
import ReactLenis from '@studio-freight/react-lenis'

const Chair = (props) => {
    const { nodes, materials } = useGLTF('blackchair.glb')
    console.log(materials)
    const texture = useLoader(TextureLoader, 'gltf_embedded_4.png')
    const chairRef = useRef()

    const clock = new Clock()

    useFrame((_, delta) => {
        chairRef.current.rotation.x += 0.0025
        chairRef.current.rotation.y += 0.0025
        chairRef.current.rotation.z += 0.0025
    })

    window.addEventListener('scroll', () => {
        chairRef.current.rotation.x += 0.015
        chairRef.current.rotation.y += 0.015
        chairRef.current.rotation.z += 0.015
    })

    const width = window.screen.width
    let scale = 1.5;
    if (width <= 1000) {
        scale = 1
    }

    return (

        <group {...props} dispose={null}>
            <mesh
                ref={chairRef}
                castShadow
                receiveShadow
                geometry={nodes.model.geometry}
                // material={materials.place_holder}
                scale={scale}
                rotation={[0.29, 0.29, 0]}
                material={new MeshStandardMaterial({ map: texture })}
            />
        </group>

    )
}

useGLTF.preload('blackchair.glb')
export default Chair
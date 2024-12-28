import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Chair = (props) => {
    const { nodes, materials } = useGLTF('blackchair.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.model.geometry}
                material={materials.place_holder}
            />
        </group>
    )
}

useGLTF.preload('blackchair.glb')
export default Chair
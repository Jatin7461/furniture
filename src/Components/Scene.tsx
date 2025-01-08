import { OrbitControls } from "@react-three/drei"
import Chair from "./Chair"

const Scene = () => {
    return <>
            <directionalLight intensity={1.5} color="#aaaaaa"
                position={[0.5, 7.5, 2.5]}
            />
            {/* <OrbitControls /> */}
            <directionalLight intensity={1.5} position={[-15, 0, -5]} />
            {/* <ambientLight intensity={0.75} color="0xffffff" /> */}
            <Chair />
    </>
}

export default Scene
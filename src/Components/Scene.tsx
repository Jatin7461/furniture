import { Suspense } from "react"
import Chair from "./Chair"

const Scene = () => {
    return <>
        <Suspense>
            <directionalLight intensity={10} />
            <Chair />
        </Suspense>
    </>
}

export default Scene
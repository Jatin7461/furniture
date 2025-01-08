import { useGSAP } from '@gsap/react'
import { useProgress } from '@react-three/drei'
import gsap from 'gsap'
import { useState } from 'react'

const LoadingScreen = () => {
    const { progress } = useProgress()
    const [fadeOut, setFadeOut] = useState(false)
    if (progress === 100) {
        if (!fadeOut)
            setFadeOut(true)
    }

    useGSAP(() => {
        gsap.to('.loadingScreen', {
            opacity: 0
        })
    }, [fadeOut])
    return <div className='loadingscreen'>

    </div>
}

export default LoadingScreen
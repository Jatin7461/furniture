import { useGSAP } from '@gsap/react'
import { useProgress } from '@react-three/drei'
import gsap from 'gsap'
import { useState } from 'react'
import SplitType from 'split-type'

const LoadingScreen = () => {
    const { progress } = useProgress()
    const [fadeOut, setFadeOut] = useState(false)
    if (progress === 100) {
        if (!fadeOut)
            setFadeOut(true)
    }

    useGSAP(() => {
        gsap.to('.loadingscreen', {
            opacity: 0,
            delay: 1
        })

        const firstHeading = new SplitType('.heading')
        const middleText = new SplitType('.middleText')
        const archiveText = new SplitType('.archive')
        gsap.to(firstHeading.words, {
            translateY: 0,
            duration: 1,
            delay: 1.3
        })

        gsap.to(archiveText.lines, {
            translateY: 0,
            duration: 1,
            delay: 1.3
        })

        gsap.to(middleText.words, {
            translateY: 0,
            duration: 1,
            delay: 1.3
        })
    }, [fadeOut])
    return <div className='loadingscreen'>
        <p className='loading'>Loading...</p>
    </div>
}

export default LoadingScreen
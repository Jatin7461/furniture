import { useProgress } from '@react-three/drei'

const LoadingScreen = () => {
    const { progress } = useProgress()
    return <div>
        progress
    </div>
}

export default LoadingScreen
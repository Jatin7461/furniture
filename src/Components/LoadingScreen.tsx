import { useProgress } from '@react-three/drei'

const LoadingScreen = () => {
    const { progress } = useProgress()
    return <div style={{ color: 'white', fontSize: 100 }}>
        progress
    </div>
}

export default LoadingScreen
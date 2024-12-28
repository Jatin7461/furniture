import React, { RefObject } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import Fourth from './Components/Fourth';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Canvas } from '@react-three/fiber';
import Scene from './Components/Scene';
import { ScrollTrigger } from 'gsap/all';
function App() {

  const container: RefObject<HTMLDivElement> = React.createRef()

  useGSAP(() => {

    const firstHeading = new SplitType('.heading')
    const middleText = new SplitType('.middleText')
    const archiveText = new SplitType('.archive')
    const thirdText = new SplitType('.thirdText')
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(thirdText.words, {
      translateY: 0,
      duration: 1
    })

    gsap.to(firstHeading.words, {
      translateY: 0,
      duration: 1,
      delay: 0.3
    })

    gsap.to(archiveText.lines, {
      translateY: 0,
      duration: 1,
      delay: 0.3
    })

    gsap.to(middleText.words, {
      translateY: 0,
      duration: 1,
      delay: 0.3
    })

  }, { scope: container })

  return <div ref={container} className="container">
    <First />
    <Second />
    <Third />
    <Fourth />
    <div className="canvas">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  </div>
}

export default App;

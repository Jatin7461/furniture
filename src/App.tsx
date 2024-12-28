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
function App() {

  const container: RefObject<HTMLDivElement> = React.createRef()

  useGSAP(() => {

    const text = new SplitType('.third .text', { types: 'lines', lineClass: "char" })

    gsap.to(text.chars, {
      translateY: 0,
      duration: 1
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

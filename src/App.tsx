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
    const studioText = new SplitType('.studio')
    // const fourthText = new SplitType('.fourth')
    const fourthLeftText = new SplitType('.left')
    const fourthRightText = new SplitType('.fourth .right')
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(studioText.words, {
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.studio2',
        start: 'bottom bottom',
        markers: true
      }
    })

    gsap.to([fourthLeftText.words, fourthRightText.words], {
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.fourth',
        start: 'top bottom'
      }
    })

    gsap.to([thirdText.words], {
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.thirdText',
        start: 'top 50%',
        // end: 'bottom top',
        onEnter: () => {
          console.log('on enter')
        },
        onLeave: () => {
          console.log('on leave')
        },
        onEnterBack: () => {
          console.log('on enter back')
        },
        onLeaveBack: () => {
          console.log('on leave back')
        }
      }
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

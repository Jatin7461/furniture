import React, { RefObject } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import Fourth from './Components/Fourth';
import { useGSAP } from '@gsap/react';
import { Suspense } from "react"

import gsap from 'gsap';
import SplitType from 'split-type';
import { Canvas } from '@react-three/fiber';
import Scene from './Components/Scene';
import { ScrollTrigger } from 'gsap/all';
import LoadingScreen from './Components/LoadingScreen';
import { Loader } from '@react-three/drei';
function App() {

  window.onbeforeunload = () => {
    window.scrollTo(0, 0)
  }


  const container: RefObject<HTMLDivElement> = React.createRef()

  useGSAP(() => {

    const firstHeading = new SplitType('.heading')
    const middleText = new SplitType('.middleText')
    const archiveText = new SplitType('.archive')
    const thirdText = new SplitType('.thirdText')
    const studioText = new SplitType('.studio')
    const fourthLeftText = new SplitType('.left')
    const fourthRightText = new SplitType('.fourth .right')
    const chairName1 = new SplitType('.chair1 .chair-name')
    const chairName2 = new SplitType('.chair2 .chair-name')
    const chairName3 = new SplitType('.chair3 .chair-name')
    const chairName4 = new SplitType('.chair4 .chair-name')
    const chairName5 = new SplitType('.chair5 .chair-name')
    const chairName6 = new SplitType('.chair6 .chair-name')

    const chairYear1 = new SplitType('.chair1 .chair-year')
    const chairYear2 = new SplitType('.chair2 .chair-year')
    const chairYear3 = new SplitType('.chair3 .chair-year')
    const chairYear4 = new SplitType('.chair4 .chair-year')
    const chairYear5 = new SplitType('.chair5 .chair-year')
    const chairYear6 = new SplitType('.chair6 .chair-year')

    const chairInfo1 = new SplitType('.chair1 .chair-info')
    const chairInfo2 = new SplitType('.chair2 .chair-info')
    const chairInfo3 = new SplitType('.chair3 .chair-info')
    const chairInfo4 = new SplitType('.chair4 .chair-info')
    const chairInfo5 = new SplitType('.chair5 .chair-info')
    const chairInfo6 = new SplitType('.chair6 .chair-info')

    gsap.registerPlugin(ScrollTrigger)

    gsap.to([chairName1.words, chairYear1.words, chairInfo1.words], {
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.chair1 .second-row',
        start: 'bottom 90%',
      }
    })
    gsap.to([chairName2.words, chairYear2.words, chairInfo2.words], {
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.chair2 .second-row',
        start: 'bottom bottom'
      }
    })
    gsap.to([chairName3.words, chairYear3.words, chairInfo3.words], {
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.chair3 .second-row',
        start: 'bottom bottom'
      }
    })
    gsap.to([chairName4.words, chairYear4.words, chairInfo4.words], {
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.chair4 .second-row',
        start: 'bottom bottom'
      }
    })
    gsap.to([chairName5.words, chairYear5.words, chairInfo5.words], {
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.chair5 .second-row',
        start: 'bottom bottom'
      }
    })
    gsap.to([chairName6.words, chairYear6.words, chairInfo6.words], {
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.chair6 .second-row',
        start: 'bottom bottom'
      }
    })

    gsap.to(studioText.words, {
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.studio2',
        start: 'bottom bottom',
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
      {/* <Loader 
      // containerStyles={}
      /> */}
      <LoadingScreen />
    </div>
  </div>
}

export default App;

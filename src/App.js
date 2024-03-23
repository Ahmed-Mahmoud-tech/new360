import React, { useState } from 'react';
import arrowImage from './assets/images/arrow.png';

const points = [
    {
        image: process.env.PUBLIC_URL + '/assets/images/1.jpg',
        neighbors: [
            {
                degree: 0,
                imageIndex: 1
            },
        ],
        info: {
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
            title: "title",
            description: "description description description description description description description description ",
        }
    },
    {
        image: process.env.PUBLIC_URL + '/assets/images/2.jpg',
        neighbors: [
            {
                degree: 0,
                imageIndex: 2
            },
            {
                degree: 180,
                imageIndex: 0
            },
        ],
        info: {
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
            title: "title",
            description: "description description description description description description description description ",
        }
    },
    {
        image: process.env.PUBLIC_URL + '/assets/images/3.jpg',
        neighbors: [
           {
                degree: 180,
                imageIndex: 1
            },
        ],
        info: {
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
            title: "title",
            description: "description description description description description description description description ",
        }
    },
  ]

 function App() {

const [currentPoint, setCurrentPoint] = useState(0)
const [oldPoint, setOldPoint] = useState(0)
const [isFirstSky, setIsFirstSky] = useState(true)

  // const images = [process.env.PUBLIC_URL + '/assets/images/1.jpg', process.env.PUBLIC_URL + '/assets/images/2.jpg', process.env.PUBLIC_URL + '/assets/images/3.jpg', process.env.PUBLIC_URL + '/assets/images/4.jpg', process.env.PUBLIC_URL + '/assets/images/5.jpg', process.env.PUBLIC_URL + '/assets/images/6.jpg', process.env.PUBLIC_URL + '/assets/images/7.jpg', process.env.PUBLIC_URL + '/assets/images/8.jpg', process.env.PUBLIC_URL + '/assets/images/9.jpg', process.env.PUBLIC_URL + '/assets/images/10.jpg', process.env.PUBLIC_URL + '/assets/images/11.jpg', process.env.PUBLIC_URL + '/assets/images/12.jpg', process.env.PUBLIC_URL + '/assets/images/13.jpg', process.env.PUBLIC_URL + '/assets/images/14.jpg', process.env.PUBLIC_URL + '/assets/images/15.jpg'];

  const  changeSky = (current, next) => {
    console.log(current, next,)
    // if (oldPoint == 1) { setOldPoint(0); setCurrentPoint(1) } else { setOldPoint(1); setCurrentPoint(0) }
    document.querySelector(next).setAttribute('animation', {
      property: 'material.opacity',
      from: 0,
      delay: 0, 
      to: 1,  // Target opacity (1 for fully visible)
      dur: 0,  // Duration of the animation in milliseconds
      easing: 'linear'
    })
    document.querySelector(current).setAttribute('animation', {
      property: 'material.opacity',
      delay: 0, 
        from:1,
        to: 0,  // Target opacity (1 for fully visible)
        dur: 505,  // Duration of the animation in milliseconds
        easing: 'linear'
    })
 
    
    document.querySelector(current).setAttribute('radius',  '100')
    document.querySelector(next).setAttribute('radius', '101')

  }

  const move = (index) => {
    setIsFirstSky(!isFirstSky);
    isFirstSky ? changeSky('#fSky', '#fSky2') : changeSky('#fSky2', '#fSky')
 
         setCurrentPoint(index)
        setTimeout(() => {
          setOldPoint(index)
        }, 505);
 
  }
 
  
  return (
    <>
      <a-scene cursor="rayOrigin: mouse" >
        <a-camera wasd-controls='acceleration=1'  rotation="250 0 0"></a-camera>
        <a-sky
          radius="100"
          rotation="0 45 0"
          position="0 0 0"
          // position="-70 0 150"
          side="double"
          id="fSky"
          material=" transparent: false; opacity: 1;"
          // src={points[0].image}
           src={points[isFirstSky ? currentPoint : oldPoint].image}
          >
        </a-sky>
        <a-sky
          radius="100"
          rotation="0 45 0"
          position="0 0 0"
          // position="70 0 150"
          side="double"
          id="fSky2"
          material=" transparent: false; opacity: 0;"
          // src={points[1].image}
          src={points[isFirstSky ? oldPoint : currentPoint].image}
        > 
        </a-sky>
 
   
        {points[currentPoint].neighbors.map((neighbor, index) => 
        <a-entity key={index} position="0 -5 0" rotation={`0 ${neighbor.degree} 0`}>
          <a-image src={arrowImage} material="" geometry="" position="0 0.6 -13" rotation="270 0 90" scale="3 3 3" onClick={()=> move(neighbor.imageIndex)}></a-image>
        </a-entity>
  )}

      </a-scene>
 
      {/* <button onClick={()=>move()} className='fixed top-0 left-10 z-50 '>move</button> */}
      {/* <button onClick={() => {
        move(0);
      }} className='fixed top-0 left-10 z-50 '>zero</button>
      <button onClick={() => {
        move(1);
      }} className='fixed top-0 left-10 z-50 '>one</button>
      <button onClick={() => {
        move(2);
      }} className='fixed top-0 left-10 z-50 '>two</button> */}


      {/* /********************************** */}
      {/* <button   className='fixed top-0 left-10 z-50 '>{isFirstSky.toString()}</button>
      <button   className='fixed top-0 left-10 z-50 '>{oldPoint}</button>
      <button   className='fixed top-0 left-10 z-50 '>{currentPoint}</button> */}

      
    
      
      
    </>
  );
}

export default App;

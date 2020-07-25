import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import Dots from './carousel-item/dots'
import Cards from './carousel-item/cards'

const Container = styled.div`
  position: relative;
  display:grid;
  justify-content:center;
  margin-bottom:2vh;
  overflow:hidden;
  .arrows {
    position: absolute;
    opacity: 0.65;
    color: ${props => props.theme.background};
    top: calc(50% - 20px);
    background: ${props => props.theme.text};
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
    transition: 0.2s;
    &:hover {
      opacity:1;
      box-shadow: 0 0 10px 0 ${(props) => props.theme.headings};
      transition: ease 0.2s all;
    }
  }
`;
const Next = styled.div`
  right: 2vw;
`;
const Prev = styled.div`
  left: 2vw;
  transform: scale(-1);
`;
const CarouselViewport = styled(motion.div)`
  width: 100vw;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto auto auto;
  justify-items: center;
  padding: 5vh 0 3vh 0;
  @media screen and (max-width: 600px) {
    & > a:first-child {
      margin-left: -68.5vw;
    }
    & > a:last-child {
      margin-right: -68.5vw;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 900px) {
    & > a:first-child {
      margin-left: -31vw;
    }
    & > a:last-child {
      margin-right: -31vw;
    }
    padding: 5vh 0 8vh 0;
  }
  @media screen and (min-width: 900px) {
    margin-left: -8vw;
    padding: 5vh 0 7vh 0;
  }

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  /* display: flex; */
  /* overflow-x: auto; */
  /* & > div:nth-child(1) {
    margin-left: 50vw;
  }
  & > div:last-child {
    margin-right:50vw;
  } */

  &::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: none;
    color: inherit!important;
  }
  a:hover {
    color: inherit!important;
  }
`;

// const carouselVariants = {
//   mobile: {
//     x: "79vw" * activeIndex,
//   },
//   tablet: {
//     x: "54vw" * activeIndex,
//   },
//   desktop: {
//     x: "34vw" * activeIndex,
//   },
// };



const CardCarousel = ({data}) => {
  // Calculate the number of slides
  const numSlides = data.allSanityProject.nodes.length;
  // Create ref on the viewport so we can select it and change its scroll position

  // Declare Slider State
  const [state, setState] = useState({
    initialRender: true,
    activeIndex: 1,
    transform: {
      mobile: 79,
      tablet: 54,
      desktop: 37,
    },
    device: null,
    position: 0,
  });

  const { initialRender, activeIndex, transform, device, position } = state;

  const findPosition = () => {
    let index = activeIndex - 1
    let x = transform[device] * index
    return x
  }

  useEffect(() => {
    let newPosition = findPosition()
    setState({ ...state, position: -newPosition });
  }, [activeIndex])

  // Run the above function ONCE when component mounts, and allow declarations to be updated when window is resized. Add function debouncing with timeout() so resizing is performant
  useEffect(() => {
    // Run when component first mounts to establish window size
    if (initialRender) {
      let deviceType = setDeviceType()
      let newPosition = findPosition()
      setState({...state, initialRender: false, device: deviceType, position: newPosition})
    }
    // TimeoutID
    let timeoutID = null;
    const resizeListener = () => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        let deviceType = setDeviceType();
        setState({...state, device: deviceType})
      }, 200);
    };
    // Add event listener to set clientViewPortSize if it is resized
    window.addEventListener("resize", resizeListener);
    // Cleanup function removes event listener
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  });

  // Function will increment active slide
  const incrementSlides = (slideDirection, selectedSlide) => {
    // Wrapping wrap(0, 4, x) x = 0 or 3 will return 0 or 3, x = 4, returns 0
    // Special addition to ternary operator must allow a selectedSlide of index 0 to return 0 instead of return false.
    const newActiveSlide = wrap(0, numSlides, selectedSlide == 0 ? 0 : selectedSlide || activeIndex + slideDirection);
    setState({...state, activeIndex: newActiveSlide})
  };



  const setDeviceType = () => {
    const windowSize = window.innerWidth;

    if(windowSize < 600) {
      return 'mobile'
    } else if(windowSize < 900) {
      return 'tablet';
    } else if (windowSize >= 900) {
      return 'desktop';
    }
  }

  return (
    <Container>
      <CarouselViewport
        animate={{x: `${position}vw`}}
        transition={{duration:.4}}
      >
        <Cards
          className={"container"}
          data={data.allSanityProject.nodes}
          incrementSlides={incrementSlides}
          activeIndex={activeIndex}
        />
      </CarouselViewport>
      <Prev
        className="arrows"
        onClick={() => {
          incrementSlides(-1);
        }}
      >
        {"‣"}
      </Prev>
      <Next
        className="arrows"
        onClick={() => {
          incrementSlides(1);
        }}
      >
        {"‣"}
      </Next>
      <Dots
        data={data.allSanityProject.nodes}
        activeIndex={activeIndex}
        incrementSlides={incrementSlides}
      />
    </Container>
  );
}

export default CardCarousel

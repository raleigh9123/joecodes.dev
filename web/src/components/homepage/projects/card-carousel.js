import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Dots from './carousel-item/dots'
import Cards from './carousel-item/card'

const Container = styled.div`
  position: relative;
  display:grid;
  justify-content:center;
  margin-bottom:2vh;
  .arrows {
    opacity: 0.65;
    color: ${props => props.theme.background};
    top: calc(50% - 20px);
    position: absolute;
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
  padding:5vh 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  & > div:nth-child(1) {
    margin-left: 50vw;
  }
  & > div:last-child {
    margin-right:50vw;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  transition: ease 0.4s all;
`;

const CardCarousel = ({data, advanceSlide, activeIndex}) => {
  return (
    <Container>
      <CarouselViewport>
        <Cards
          data={data}
          advanceSlide={advanceSlide}
          activeIndex={activeIndex}
         />
      </CarouselViewport>
      <Prev
        className="arrows"
        onClick={() => {
          advanceSlide(-1);
        }}
      >
        {"‣"}
      </Prev>
      <Next
        className="arrows"
        onClick={() => {
          advanceSlide(1);
        }}
      >
        {"‣"}
      </Next>
      <Dots
        data={data}
        activeIndex={activeIndex}
       />
    </Container>
  );
}

export default CardCarousel

import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 600px) {
    bottom: -.5vh;
  }
  left: 0;
  text-align: center;
  right: 0;
`;
const Dot = styled(motion.div)`
  height: 1rem;
  width: 1rem;
  margin: 0 1vw;
  background-color: ${(props) => props.theme.text};
  border-radius: 50%;
  display: inline-block;
  transition: ease 0.2s;
  cursor: pointer;
  opacity:0.8;
  transition:.4s;
  box-shadow: ${props => props.theme.boxShadow};
  &:hover {
    opacity:1;
    box-shadow: 0 0 10px 0 ${(props) => props.theme.headings};
    transition: ease 0.2s all;
  }
`;

const dotVariants = {
  // Active
  0: {
    opacity:1,
    transition:.1
  },
  // Default
  1: {
    opacity: 0.2,
    transition:.1
  }
}


const Dots = ({ data, activeIndex, incrementSlides }) => {
  return (
    <Container>
      {data.map((node, index) => (
        <Dot
          onClick={() => {
            incrementSlides(null, index);
          }}
          index={index}
          variants={dotVariants}
          initial={index == activeIndex ? "1" : "0"}
          animate={index == activeIndex ? "0" : "1"}
          key={index}
        />
      ))}
    </Container>
  );
};

export default Dots

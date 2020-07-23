import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Img from "gatsby-image";

const CardWrapper = styled(motion.div)`
  margin: inherit;
  position: relative;
  flex: 0 0 75vw;
  @media screen and (min-width: 600px) and (max-width: 900px) {
    flex: 0 0 50vw;
  }
  @media screen and (min-width: 900px) {
    flex: 0 0 29vw;
  }
  width: 100%;
  margin: 0 2vw;
  scroll-snap-align:center;
`;
const Card = styled.div`
  /* position: absolute; */
  /* /* margin: 0 2vw; */
  background-color: ${(props) => props.theme.secondaryBackground};
  border: 1px solid ${(props) => props.theme.borderPrimary};
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: ease 0.2s all;
  scroll-snap-align: center;
  border-radius: 1rem;
  & > *:not(:first-child) {
    padding: 1vh 1vw;
  }
  span {
    position: absolute;
    top: 0;
    width: 50%;
    color: #f7f7f7;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.6);
    border-radius: 1rem 0 0 0;
  }
`;
const BannerImage = styled(Img)`
  height: 25vh;
  border-radius: 1rem 1rem 0 0;
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const cardVariants = {
  // Left Slide
  0: {
    opacity: 0.5,
    transform: `scale(1)`,
  },
  // Active Slide
  1: {
    opacity: 1,
    transform: `scale(1.05)`,
  },
  // Right Slide
  2: {
    opacity: 0.5,
    transform: `scale(1)`,
  },
};

const Cards = ({data, advanceSlide, activeIndex}) => {

  return (
    <>
      {data.map(
          (
            {
              brief,
              type,
              coverImage,
              description,
              githubURL,
              id,
              liveURL,
              name,
              otherImages,
              technologies,
            },
            index
          ) => (
              <CardWrapper
              variants={cardVariants}
              // index={`${slides[index]}`}
              // animate={`${index == leftSlide ? leftSlide : index == activeIndex ? activeIndex : index == rightSlide && rightSlide}`}
              key={id}>
                <Card>
                  <BannerImage
                    fluid={coverImage.asset.fluid}
                    alt={brief}
                    style={{ "object-fit": "cover" }}
                  />
                  <span>{type}</span>
                  <p>{brief}</p>
                  <h2>{name}</h2>
                  <ul>
                    <h6>Technologies</h6>
                    {technologies.map((title, index) => (
                      <li key={`id-${index}`}>- {title}</li>
                    ))}
                  </ul>
                </Card>
              </CardWrapper>
          )
        )}
        <CardWrapper />
    </>
  )
}

export default Cards

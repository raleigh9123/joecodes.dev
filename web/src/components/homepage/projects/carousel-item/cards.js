import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image";

const CardWrapper = styled.div`
  /* margin: inherit; */
  position: relative;
  /* display:grid; */
  /* grid-auto-flow:row; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* overflow:hidden; */
  width: 75vw;
  justify-self: stretch;
  @media screen and (min-width: 600px) and (max-width: 900px) {
    width: 50vw;
  }
  @media screen and (min-width: 900px) {
    width: 29vw;
  }
  margin: 0 2vw;
  scroll-snap-align: center;
  &:not(.active) {
    opacity: 0.5;
    transition: ease 0.2s all;
    cursor: pointer;
  }
  &.active {
    & > div {
      box-shadow: ${(props) => props.theme.boxShadowHighlight};
      height: fit-content;
    }
    transition: ease 0.2s all;
    transform: translateY(1vh) scale(1.05);
  }
`;

const Card = styled.div`
  height:100%;
  background-color: ${(props) => props.theme.secondaryBackground};
  border: 1px solid ${(props) => props.theme.borderPrimary};
  box-shadow: ${(props) => props.theme.boxShadow};
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

const Cards = ({data, incrementSlides, activeIndex}) => {

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
                onClick={() => {
                  incrementSlides(null, index);
                }}
                className={index == activeIndex ? "active" : ""}
                key={id}>
                  <Card>
                    <BannerImage
                      fluid={coverImage.asset.fluid}
                      alt={brief}
                      style={{ "objectFit": "cover" }}
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

import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const CardWrapper = styled.div`
  /* margin: inherit; */
  position: relative;
  /* display:grid; */
  /* grid-auto-flow:row; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* overflow:hidden; */
  width: 73vw;
  justify-self: stretch;
  @media screen and (min-width: 600px) and (max-width: 900px) {
    width: 46vw;
  }
  @media screen and (min-width: 900px) {
    width: 31vw;
  }
  margin: 0 3vw;
  scroll-snap-align: center;
  cursor: pointer;

  &:not(.active) {
    opacity: 0.3;
    transition: ease 0.2s all;
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
    font-weight:600;
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
            subline,
            type,
            coverImage,
            githubURL,
            id,
            demoURL,
            description,
            technical,
            name,
            slug,
            otherImages,
            technologies,
          },
          index
        ) => (
          <Link key={id} to={`/projects/${slug.current}`}>
            <CardWrapper
              onClick={() => {
                incrementSlides(null, index);
              }}
              className={index == activeIndex ? "active" : ""}
            >
              <Card>
                <BannerImage
                  fluid={coverImage.asset.fluid}
                  alt={subline}
                  style={{ objectFit: "cover" }}
                />
                <span>{type}</span>
                <p>{subline}</p>
                <h2>{name}</h2>
                <ul>
                  <h6>Technologies</h6>
                  {technologies.map((title, index) => {
                    if (index == 0 || index == 1 || index == 2) {
                      return <li key={`id-${index}`}>- {title}</li>;
                    }
                  })}
                </ul>
              </Card>
            </CardWrapper>
          </Link>
        )
      )}
      <CardWrapper />
    </>
  );
}

export default Cards

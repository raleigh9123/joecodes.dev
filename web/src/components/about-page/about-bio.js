import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderPrimary};
`;
const Container = styled.div`
  box-shadow: ${(props) => props.theme.boxShadowHighlight};
  margin: 10vh 10vw;
  padding: 5vh 5vw;
  width: 70vw;
  h2 {
    display: inline-block;
    border-radius: 2px;
    margin-bottom: 4vh;
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;
const Image = styled(Img)`
  & {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 4vh;
    border-radius: 8px;
    box-shadow: ${(props) => props.theme.imageBoxShadow};
  }
  @media screen and (min-width: 600px) {
    & {
      float: right;
      width: 25vw;
      margin: 2vh 4vw;
    }
  }
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
     {
       file(relativePath: {eq: "profile-picture.jpg"}) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
     }
   `);

  return (
    <Wrapper>

      <Container>
        <div>
          <h2>Bio</h2>
        </div>
        <Image
          fluid={data.file.childImageSharp.fluid}
          alt="Joseph Butterfield Profile"
        />
        <p>
          I'm a native to Portland, OR. Naturally surrounded by forests, rivers,
          and mountains, I enjoy making fresh coffee at a viewpoint, and camping
          out on a beach watching the sunset over the ocean and rivers.
          <br />
          <br />I have been actively involved in the CrossFit community for over 7
          years, and I love handstands and cleans almost as much as I love burger
          week and a Mcmenamins brewfest.
          <br />
          <br />I have a list of favorite podcasts: amuse yourself and learn with
          'Stuff You Should Know' or subscribe to 'Syntax' to pickup new dev
          tricks. [Wes and Scott, my goal is to build an app someday that you guys
          think is awesome.]
          <br />
          <br />I built my dream PC recently. It runs all the games I have wanted
          to play forever, and I thought it aesthetically.. beautiful: until I
          remembered how uugly Windows is (sorry fans, but its true =)). I'm
          currently playing through 'The Witcher 3' and learning how to deploy my
          Node.js apps with Google. (keep an eye out for joecodes.io, coming soon
          to a browser in front of you!)
          <br />
          <br />
          My goal is to become a full stack javascript developer. Maybe I will
          work in Portland, or maybe I will prefer traveling and working remotely.
          I do know that my long-term dream is to build apps and websites for gyms
          and coaches, or small businesses like my best friend's future coffee
          shop, and someday, maybe, for an incorporated co-op of pro designers and
          developers.
          <br />
          <br />
          Thanks for reading, and do something awesome today!
        </p>
      </Container>
    </Wrapper>
  );
}

export default Bio

import React from "react"
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: ${(props) => props.theme.boxShadowHighlight};
  justify-items: center;
  align-content: center;
  /* gap: 3vh; */
  margin: 10vh 10vw;
  padding: 5vh 5vw;
`;

const Bio = () => {
  return (
    <Container>
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

      <p>Place an image here</p>
    </Container>
  );
}

export default Bio

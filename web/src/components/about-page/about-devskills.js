import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderPrimary};
`;
const Container = styled.div`
  display:grid;

  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 10vh 10vw;
  padding: 5vh 5vw;
  width:70vw;
  h2 {
    display:inline-block;
    border-radius:2px;
    margin-bottom:4vh;
    box-shadow: ${props => props.theme.boxShadow}
  }
  & >*:nth-child(2) {
    display:inline-block;
  }

`;

const DevSkills = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <h2>Developer Skills</h2>
        </div>

        <div>
          <p>Filter</p>
          <ul>
            <ol>Front-End</ol>
            <ol>Back-End</ol>
            <ol>Full-Stack</ol>
          </ul>
        </div>

        <div>
          <h3>Technologies</h3>
          <ol>
            <ul>
              Front-End
              <p>HTML &amp; CSS</p>
              <li>Responsive Styling</li>
              <p>JavaScript</p>
              <li>Regular Expressions</li>
              <li>jQuery</li>
              <li>DOM Manipulation</li>
              <li>Class/Object Modeling</li>
              <li>Ajax + Fetch API</li>
              <li>Testing/Debugging</li>
            </ul>
            <ul>
              Back-End
              <p>Server Environment</p>
              <li>Node.js + CLI</li>
              <p>Frameworks &amp; Templating</p>
              <li>Express + Pug</li>
            </ul>
            <ul>
              Version Control
              <li>GitHub + GitHub Pages</li>
            </ul>
          </ol>
        </div>
      </Container>
    </Wrapper>
  );
}

export default DevSkills

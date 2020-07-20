import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display:grid;
`

const DevSkills = () => {
  return (
    <Container>
      <div>
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
        <ol>
          <h6>Contact Info</h6>
          <ul>
            <li>503-707-6113</li>
            <li>raleigh9123@gmail.com</li>
          </ul>
        </ol>
      </div>
    </Container>
  );
}

export default DevSkills

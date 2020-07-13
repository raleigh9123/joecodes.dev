import React from "react"
import styled from "styled-components"

const SwitchContainer = styled.div`
  position: fixed;
  color: ${props => props.theme.background};
  background-color: ${props => props.theme.text};
  bottom: 0;
  right: 0;
  margin-right: 1%;
  margin-bottom: 1%;
  padding:10px;
  border: 1px solid;
  border-color: ${props => props.theme.color};
  border-radius: 5px;
  text-align:center;
  z-index:100;
`;
const SwitchInput = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  top: 50%;
  transform: translateY(-10%);

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + span {
    background-color: #2196f3;
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  /* -webkit-transition: .4s; */
  transition: .4s;
  border-radius: 34px;
  }
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius:50%;
  }
`;

const ThemeToggle = (props) => {

  return (
    <SwitchContainer>
      <p>Dark/Light</p>
      <SwitchInput>
        <input onClick={props.themeToggle} type="checkbox" />
        <Slider />
      </SwitchInput>
    </SwitchContainer>
  )
}

export default ThemeToggle

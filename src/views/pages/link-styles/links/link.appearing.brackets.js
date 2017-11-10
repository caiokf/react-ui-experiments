import styled from 'styled-components'

export default styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 30px;
  position: relative;
  display: inline-block;
  margin: 15px 25px;
  outline: none;

  &:hover, &:focus {
    outline: none;
  }

  &::before,
  &::after {
    box-sizing: border-box;
    display: inline-block;
    opacity: 0;
    transition: transform 0.3s, opacity 0.2s;
  }

  &::before {
    margin-right: 10px;
    content: '[';
    transform: translateX(20px);
  }

  &::after {
    margin-left: 10px;
    content: ']';
    transform: translateX(-20px);
  }

  &:hover,
  &:focus {
    &::before,
    &::after {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`

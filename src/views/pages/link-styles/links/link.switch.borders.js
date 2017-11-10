import styled from 'styled-components'
import colors from '../colors'

export default styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 30px;
  position: relative;
  display: inline-block;
  margin: 15px 25px;
  outline: none;
  padding: 0 20px;
  height: 45px;
  line-height: 45px;

  &:hover, &:focus {
    outline: none;
  }

  &::before,
  &::after {
    position: absolute;
    width: 45px;
    height: 2px;
    background: ${props => props.foreground};
    content: '';
    opacity: 0.2;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    pointer-events: none;
  }

  &::before {
    top: 0;
    left: 0;
    transform: rotate(90deg);
    transform-origin: 0 0;
  }

  &::after {
    right: 0;
    bottom: 0;
    transform: rotate(90deg);
    transform-origin: 100% 0;
  }

  &:hover,
  &:focus {
    &::before,
    &::after {
      opacity: 1;
    }

    &::before {
      left: 50%;
      transform: rotate(0deg) translateX(-50%);
    }

    &::after {
      right: 50%;
      transform: rotate(0deg) translateX(50%);
    }
  }
`

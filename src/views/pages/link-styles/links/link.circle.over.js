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

  &:hover, &:focus {
    outline: none;
  }

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    content: '';
    opacity: 0;
  }

  &::before {
    width: 60px;
    height: 60px;
    border: 2px solid rgba(0,0,0,0.2);
    transition: transform 0.3s, opacity 0.3s;
    transform: translateX(-50%) translateY(-50%) scale(0.2);
  }

  &::after {
    width: 45px;
    height: 45px;
    border: 6px solid rgba(0,0,0,0.2);
    transform: translateX(-50%) translateY(-50%) scale(0.8);
  }

  &:hover,
  &:focus {
    &::before,
    &::after {
      opacity: 1;
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }
`

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
  transition: color 0.3s;

  &:hover, &:focus {
    outline: none;
  }

  &::before {
    position: absolute;
    top: 100%;
    left: 50%;
    color: transparent;
    content: '•';
    text-shadow: 0 0 transparent;
    font-size: 1.2em;
    transition: text-shadow 0.3s, color 0.3s;
    transform: translateX(-50%);
    pointer-events: none;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: #ba7700;

    &::before {
      color: #fff;
      text-shadow: 10px 0 #fff, -10px 0 #fff;
    }
  }
`

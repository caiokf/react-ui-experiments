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
  padding: 10px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 700;
  text-shadow: none;
  transition: color 0.3s;

  &:hover, &:focus {
    outline: none;
  }

  &::before,
  &::after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${colors.foreground};
    content: '';
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(-10px);
  }

  &::before {
    top: 0;
    transform: translateY(-10px);
  }

  &::after {
    bottom: 0;
    transform: translateY(10px);
  }

  &:hover,
  &:focus {
    color: ${colors.foreground};

    &::before,
    &::after {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

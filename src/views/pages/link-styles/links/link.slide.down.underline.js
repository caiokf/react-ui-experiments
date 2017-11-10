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
  padding: 0 0 10px;

  &:hover, &:focus {
    outline: none;
  }

  &::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${colors.foreground};
    content: '';
    opacity: 0;
    transition: height 0.3s, opacity 0.3s, transform 0.3s;
    transform: translateY(-10px);
  }

  &:hover,
  &:focus {
    &::after {
      height: 3px;
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

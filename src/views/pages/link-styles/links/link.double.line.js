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
  padding: 12px 10px 10px;
  text-shadow: none;
  font-weight: 500;

  &:hover, &:focus {
    outline: none;
  }

  &::before,
  &::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${colors.foreground};
    content: '';
    transition: transform 0.3s;
    transform: scale(0.85);
  }

  &::after {
    opacity: 0;
    transition: top 0.3s, opacity 0.3s, transform 0.3s;
  }

  &:hover,
  &:focus {
    &::before,
    &::after {
    	transform: scale(1);
    }

    &::after {
      top: 0%;
      opacity: 1;
    }
  }
`

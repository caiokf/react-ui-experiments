import styled from 'styled-components'

export default styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 30px;
  position: relative;
  display: inline-block;
  margin: 15px 25px;
  outline: none;
  padding: 8px 0;

  &:hover, &:focus {
    outline: none;
  }

  &::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(0,0,0,0.1);
    content: '';
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(10px);
  }

  &:hover,
  &:focus {
    &::after {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

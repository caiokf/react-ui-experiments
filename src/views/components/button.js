import React, { Component } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import css from 'views/styles'

export default class Button extends Component {
  render() {
    return (
      <StyledButton type='button' {...this.props} />
    )
  }
}

const StyledButton = styled.button`
  ${css.typography.default}
  border-color: ${css.colors.teal};
  background-color: ${css.colors.teal};
  color: ${css.colors.white};
  display: inline-block;
  margin-bottom: 0;
  border-radius: 4px;
  border: 1px solid;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 10px;

  padding: ${props => !!props.small ? '5px 10px' :'9px 27px'};
  font-weight: ${props => !!props.small ? '500' :'700'};
  line-height: ${props => !!props.small ? '1' :'1.43'};

  &:hover {
    background-color: ${lighten(0.05, css.colors.teal)};
  }
`

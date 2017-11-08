import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex: ${props => props.flex || '1'};
  flex-direction: ${props => !!props.column ? 'column' : 'row'};
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  padding: ${props => props.padding || '0'}
`

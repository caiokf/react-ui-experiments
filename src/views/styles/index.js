import colors from './colors'
import dimensions from './dimensions'
import typography from './typography'

const baseStyles = `
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.white};
    ${typography.default}
  }
`

export default {
  colors,
  dimensions,
  typography,
  baseStyles,
}

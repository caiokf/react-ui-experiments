import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import Router from './router'
import css from 'views/styles'

const configureGlobalStyledComponents = () => {
  return injectGlobal`${css.baseStyles}`
}

ReactDOM.render(Router, document.getElementById('root'))
configureGlobalStyledComponents()

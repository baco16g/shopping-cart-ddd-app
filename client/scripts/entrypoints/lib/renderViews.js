/* @flow */

import { render } from 'react-dom'
import { map } from 'lodash'

export default function(selector: string, component: Function): void {
  const elements = document.querySelectorAll(`[${selector}]`)
  map(elements, element => {
    render(component(), element)
  })
}

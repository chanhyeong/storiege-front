import React from 'react'
import Draft from 'draft-js'

import { FORMAT_LIST } from './optionList'
import 'styles/editor/editorBar.scss'

class EditorBar extends React.Component {
  constructor() {
    super();
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className='editor_bar'>
        <ul>
          {FORMAT_LIST.map((option, i) => (
            <li key={i}>
              <a href="#" onClick={this.handleClick} title={option.title}>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default EditorBar
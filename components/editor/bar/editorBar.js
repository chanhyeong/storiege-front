import React from 'react'

import { FORMAT_LIST } from './optionList'
import 'styles/editor/editorBar.scss'

class EditorBar extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(e, style) {
    e.preventDefault()
    this.props.onEdit(style)
  }

  render() {
    return (
      <div className='editor_bar'>
        <ul>
          {FORMAT_LIST.map((option, i) => (
            <li key={i}>
              <a href="#" onClick={(e) => this._onClick(e, option.style)} title={option.title}>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default EditorBar
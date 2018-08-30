import React from 'react'
import Draft from 'draft-js'

class SubOption extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className='sub_option'>
        <ul>
          {this.props.options.map((option, i) => (
            <li key={i}>
              <a href="#" onClick={this.handleClick} title={option.title}>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SubOption
import React from 'react'
import Draft from 'draft-js'

class BarSubOption extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <ul className='sub_option'>
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

export default BarSubOption
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string
  }

  static defaultProps = {
    btnText: 'ADD'
  }
  render(){
    return (
      <div>
        <input type="text"/><button>{this.props.btnText}</button>
      </div>
    )
  }
}

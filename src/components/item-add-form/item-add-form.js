import React, { Component } from 'react'

import './item-add-form.css'

export default class ItemAddForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      label: ''
    }
  }

  handleLabelChange = (event) => {
    this.setState({
      label: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddItem(this.state.label)

    this.setState({
      label: ''
    })
  }

  render () {
    return (
      <form
        className='item-add-form d-flex'
        onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          className='form-control'
          onChange={this.handleLabelChange}
          value={this.state.label}
          placeholder='What needs to be done'
        />
        <button className='btn btn-outline-secondary'>
          Add&nbsp;item
        </button>
      </form>
    )
  }
}

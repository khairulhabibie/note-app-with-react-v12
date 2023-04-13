import React, { Component } from 'react';
// import PropTypes from 'prop-types'

export default class NoteInput extends Component {
  constructor(props) {
    super(props)

    // inisialisasi state
    this.state = {
      title: "",
      body: ""

    }
  }

  onTitleChangeHandler = (event) => {
    this.setState(() => {
      return {
        title: event.target.value
      }
    })
  }
  onBodyChangeHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler} >
        <input type="text" placeholder='Title...' value={this.state.title} onChange={this.onTitleChangeHandler} autoComplete='off' className='input' />
        <textarea placeholder='Note...' value={this.state.body} onChange={this.onBodyChangeHandler} rows={5} className='input' />
        <button type='submit'>Add Note</button>
      </form>
    )
  }
}

// check type
// NoteInput.propTypes = {
//   addNote: PropTypes.func.isRequired
// };
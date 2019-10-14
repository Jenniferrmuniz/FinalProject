import React, { Component } from 'react'

class QuizQuestion extends Component {
  

  
  
  
  render () {
    return (
      <div>
          <h6>Do you have any children living with you?</h6>
          <button type='button' name='children' className={(this.state.children === "false" ? 'selected' : '')} value='false' onClick={this.setForm}>No children</button>
          <button type='button' name='children' className={(this.state.children === "true" ? 'selected' : '')} value='true' onClick={this.setForm}>Children</button>
      </div>
    )
  }
}

export default QuizQuestion
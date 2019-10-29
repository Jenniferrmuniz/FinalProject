import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class LoggedOutView extends Component {
  render() {
    return (
      <div className='home-loggedOut'>

        <div className='title'>
          <span>Pet Harmony</span>
          <img src='../../../black-icon.png' />
        </div>

        <div className='signup-div'>
          <Link className='sign-up' to='/signup'>Get Started</Link>
          <p className='log-in'>Already have an account? <Link to='/login'>Log in</Link></p>
        </div>

        <div className='image-div'>
          <img src='../../../dogs-pic.png' />
        </div>

      </div>
    )
  }
}

export default LoggedOutView
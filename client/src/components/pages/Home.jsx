import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'


export default class Home extends Component {


  showHome = () => {
    if (this.props.info.username) {
      return <div>
        <p>Logged in</p>
        <p>Welcome {this.props.info.username}</p>
        <p>Best match:</p>
        <img />
        <p>See all of your matches!</p>

      </div>
    }
    else {
      return <div>
        <p>Not logged in</p>
        <Link to='/signup'>Get Started</Link>
        <p>Already have an account? <Link to='/login'>Log in</Link></p>
      </div>

    }
  }



  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        {this.showHome()}
      </div>
    )
  }
}

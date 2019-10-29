import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoggedInView1 from './home-components/LoggedInView1'
import LoggedOutView from './home-components/LoggedOutView'


export default class Home extends Component {


  showHome = () => {

    if (this.props.info.username) {
      let homeLink;

      // If user is logged in has taken the quiz
      if (this.props.info.preferences && this.props.topMatch) {
        homeLink = <LoggedInView1 topMatch={this.props.topMatch}/>
      }

      // User is logged in but has not taken the quiz yet
      else {
        homeLink = <div className='preferences-false'>
          <p>Want to find your best matches from adoptable dogs near you?</p>
          <Link to="/quiz">Take Quiz</Link>
        </div>
      }

      return <div className='home-loggedIn'>
        {homeLink}
      </div>
    }

    // User is NOT logged in
    else {
      return <LoggedOutView/>

    }
  }


  render() {
    return (
      <div className="homePage">
        {this.showHome()}
      </div>
    )
  }
}

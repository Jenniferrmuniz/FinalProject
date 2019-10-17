import React, { Component } from 'react'
// import { Route, Link, NavLink, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default class Home extends Component {


  showHome = () => {


    if (this.props.info.username) {
      let homeLink;

      // If user is logged in has taken the quiz
      if (this.props.info.preferences) {

        homeLink = <div className='preferences-true'>
          <div className='matches-div'>

            <div className='bestMatch-div'>
              <p>Your Best Match:</p>

                <Link className='link-hover-div' to={"/all-dogs/" + this.props.topMatch.id}>
                  <img className='top-match' src={this.props.topMatch.photos[0].large} alt='best matched dog' />
                  <span>{this.props.topMatch.name}</span>
                </Link>

            </div>

            <div className='matchesLink'>
              <Link className='theLink' to="/all-dogs">See all matches</Link>
            </div>
            <div className='matchesLink'>
              <Link className='theLink' to="/quiz">Take Quiz Again</Link>
            </div>
          </div>

          <div className='something'>
            <p>Something else goes here</p>
          </div>
        </div>
      }

      // User is logged in but has not taken the quiz yet
      else {
        homeLink = <div className='preferences-false'>
          <p>Want to find your best matches from adoptable dogs near you?</p>
          <Link to="/quiz">Take Quiz</Link>
        </div>
      }


      return <div className='home-loggedIn'>
        <div className='homeTitle'>
          <p>Welcome {this.props.info.username}</p>
        </div>

        {homeLink}

      </div>
    }

    // User is NOT logged in
    else {
      return <div className='home-loggedOut'>
        <Link to='/signup'>Get Started</Link>
        <p>Already have an account? <Link to='/login'>Log in</Link></p>
      </div>

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

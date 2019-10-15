import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'


export default class Home extends Component {


  showHome = () => {
    if (this.props.info.username) {
      let homeLink;
      if (this.props.info.preferences) {
        homeLink = <div className='preferences-true'>
          <div className='matches-div'>
            <div className='bestMatch-div'>
              <div>

              </div>
              <p>Your Best Match:</p>
              <div>
              <Link to="/all-dogs">
                <img src='' alt='best matched dog' />
                <p>best matched dog name goes here</p>
              </Link>
              </div>

            </div>
            <div className='matchesLink'>
              <Link className='theLink' to="/all-dogs">See all matches</Link>
            </div>
            <div className='matchesLink'>
              <Link className='theLink' to="/quiz">Take Quiz Again</Link>
            </div>
          </div>

          <div>
            <p>Something else goes here</p>
          </div>



        </div>
      }
      else {
        homeLink = <div className='preferences-false'>
          <p>Want to find your best matches from adoptable dogs near you?</p>
          <Link to="/quiz">Take Quiz</Link>
        </div>

      }


      console.log(this.props);
      return <div className='home-loggedIn'>

        <p>Welcome {this.props.info.username}</p>
        {homeLink}

      </div>
    }
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

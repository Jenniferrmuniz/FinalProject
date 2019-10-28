import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class LoggedInView1
  extends Component {
  render() {
    return (
      <div className='preferences-true'>
        <div className='matches-div'>

          <div className='bestMatch-div'>
            <p>Your Best Match :</p>

            <Link className='link-hover-div' to={"/all-dogs/" + this.props.topMatch.id}>
              {this.props.topMatch.photos[0] ?
                <img className='top-match' src={this.props.topMatch.photos[0].large} alt='best matched dog' />

                :
                <img className='top-match' src={'defaultPic.png'} alt='best matched dog' />

              }
              <p>{this.props.topMatch.name}</p>
            </Link>

          </div>

          <div className='matchesLink'>
            <Link className='theLink' to="/all-dogs">See all matches</Link>
          </div>
          <div className='matchesLink'>
            <Link className='theLink' to="/quiz">Take Quiz Again</Link>
          </div>
        </div>

        <div className='home-div'>
          <div className='something'>
            <p>Ready to adopt?</p>
            <Link to='/tips'>Check out these tips!</Link>
          </div>
          <div className='something'>
            <p>Already adopted?</p>
            <a href='http://pawnderapp.herokuapp.com/'>Schedule a playdate using Pawnder!</a>
          </div>
          <div className='something'>
            <p>Looking for a groomer?</p>
            <a href='http://spaws-project.herokuapp.com/'>Visit Spaws!</a>
          </div>
        </div>

      </div>
    )
  }
}

export default LoggedInView1

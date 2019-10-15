import React, { Component } from 'react'
import Axios from '../../../../server/node_modules/axios'
import baseURL from '../../config'


class Matches extends Component {

  state = {
    user: {
      preferences: {}
    }
  }


  componentDidMount() {
    Axios.get(`${baseURL}/api/user`, { withCredentials: true }).then(result => {
      let currentUser = result.data
      this.setState({ user: currentUser })
    })
  }


  render() {

    if(!this.state.user){
      return <p>You need to log in and take the quiz to see your matches!</p>
    }

    if(!this.state.user.preferences){
      return <p>You need to take the quiz to see your matches!</p>
    }


    let { location, children, otherPets, age, size, active, affection, watchful, heat } = this.state.user.preferences

    return (
      <div>
        Matches page!!!

        <div>
          <li>{location}</li>
          <li>{age}</li>
          <li>{children}</li>
          <li>{otherPets}</li>
          <li>{size}</li>
          <li>{active}</li>
          <li>{affection}</li>
          <li>{watchful}</li>
          <li>{heat}</li>
        </div>

      </div>
    )
  }

}



export default Matches
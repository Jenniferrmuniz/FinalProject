import React, { Component } from 'react'
import Axios from '../../../../server/node_modules/axios'



class Matches extends Component {


  state = {
    user: {
      preferences: {}
    }
  }



  componentDidMount() {
    Axios.get('http://localhost:5000/api/user', { withCredentials: true }).then(result => {
      let currentUser = result.data
      this.setState({ user: currentUser })
    })
  }


  render() {

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
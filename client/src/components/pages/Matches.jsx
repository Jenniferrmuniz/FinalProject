import React, { Component } from 'react'
import Axios from '../../../../server/node_modules/axios'



class Matches extends Component {


  state = {
  }




  componentDidMount() {
    Axios.get('http://localhost:5000/api/user', { withCredentials: true }).then(result => {
      let currentUser = result.data
      // console.log(result.data)
      this.setState({ user: currentUser })
      console.log('inside axios', this.state.user.preferences);
    })
    // console.log('outside axios', this.state.user.preferences.location);
  }


  render() {
    console.log("STATE", this.state.user)
    // let { location, children, otherPets, age, size, active, affection, watchful, heat } = this.props.preferences.preferences

    // let { location, children, otherPets, age, size, active, affection, watchful, heat } = this.state.user.preferences


    return (
      <div>
        Matches page!!!

          <div>

          {/* <li>{this.state.currentUser.preferences.location}</li> */}
          {/* <li>{age}</li>
          <li>{children}</li>
          <li>{otherPets}</li>
          <li>{size}</li>
          <li>{active}</li>
          <li>{affection}</li>
          <li>{watchful}</li>
          <li>{heat}</li> */}

        </div>

      </div>
    )
  }

}



export default Matches
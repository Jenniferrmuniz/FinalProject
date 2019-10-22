import React, { Component } from 'react'
import axios from 'axios'
// import { Route, Link, NavLink, Switch } from 'react-router-dom'
import { Route, Link, Switch } from 'react-router-dom'
import DogDetails from './comp/DogDetails'
import NoneSelected from './NoneSelected'
import baseURL from '../../config'


class Dogs extends Component {
  state = {
    user: {
      preferences: {}
    },
    dogs: [],
  }


  // Get user when page loads
  componentDidMount() {
    axios.get(`${baseURL}/api/user`, { withCredentials: true }).then(result => {
      let currentUser = result.data
      this.setState({ user: currentUser })
    })
  }



  // Loop through each dog to show the list
  showDogs = () => {
    let dogs = this.props.dogs.map((dog, i) => {
      return (
        <Link to={'/all-dogs/' + dog.id} key={i} className='eachDog'>
          <p>{i + 1}. {dog.name}</p>
          {dog.photos.length > 0 && <img src={dog.photos[0].medium} alt='dog pic' />}
        </Link>

      )
    })
    return dogs
  }




  // Use dog id to get that dogs details
  getDogById = (id) => {
    for (let i = 0; i < this.props.dogs.length; i++) {
      if (this.props.dogs[i].id === Number(id)) {
        return this.props.dogs[i];
      }
    }
  }


  render() {
    return (
      <div className='dogPage'>
        <div className='dogListWrapper'>
          {this.showDogs()}
        </div>

        <div className='dogDetailsWrapper'>
          <Switch>
            <Route exact path="/all-dogs" component={(props) => <NoneSelected />} />
            <Route exact path="/all-dogs/:id" component={(props) => <DogDetails dogInfo={this.getDogById(props.match.params.id)} theUser={this.props.user} />} />
          </Switch>
        </div>

      </div>
    )
  }
}

export default Dogs
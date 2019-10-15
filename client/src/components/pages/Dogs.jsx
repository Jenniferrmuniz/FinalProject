import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import DogDetails from './DogDetails'
import NoneSelected from './NoneSelected'
import baseURL from '../../config'
console.log(baseURL)

class Dogs extends Component {
  state = {
    user: {
      preferences: {}
    },
    dogs: [],
  }



  // componentDidMount() {
  //   axios.get('http://localhost:5000/api/all-dogs').then(res => {
  //     console.log(res)
  //     let dogPersonality = res.data.breeds.map(eachDog => {
  //       return { [eachDog.name]: { n: Math.random(), a: 0, p: 0 } }
  //     })
  //     console.log(dogPersonality)
  //   })
  // }

  // componentDidMount() {
  //   axios.get('http://localhost:5000/api/all-dogs').then(res => {
  //     //console.log(res.data.animals);

  //     let list = res.data.animals.forEach((animal) => {
  //       console.log(animal)
  //       return <li><p>{animal.name}</p></li>

  //     })
  //   })
  // }




  componentDidMount() {

    axios.get(`${baseURL}/api/user`, { withCredentials: true }).then(result => {
      let currentUser = result.data
      this.setState({ user: currentUser })
    })

    axios.get(`${baseURL}/api/all-dogs`, { withCredentials: true }).then(res => {

      console.log(res.data);
      let list = res.data.filtered.map((animal, i) => {
        return (animal);
      })
      this.setState({
        dogs: list
      })
    })

  }



  showDogs = () => {
    let dogs = this.state.dogs.map((dog, i) => {
      return (
        <Link to={'/all-dogs/' + dog.id} key={i} className='eachDog'>
          <p>{i + 1}. {dog.name}</p>
          {dog.photos.length > 0 && <img src={dog.photos[0].medium} alt='dog pic' />}
        </Link>
      )
    })
    return dogs
  }





  getDogById = (id) => {
    for (let i = 0; i < this.state.dogs.length; i++) {
      if (this.state.dogs[i].id == id) {
        return this.state.dogs[i];
      }
    }
  }


  render() {
    return (
      <div className='dogPage'>
        <div className='dogListWrapper'>
          {this.showDogs()}
        </div>

        <div className='dogInfoWrapper'>
          <Switch>
            <Route exact path="/all-dogs" component={(props) => <NoneSelected />} />
            <Route exact path="/all-dogs/:id" component={(props) => <DogDetails dogInfo={this.getDogById(props.match.params.id)} />} />
          </Switch>
        </div>

      </div>
    )
  }
}

export default Dogs
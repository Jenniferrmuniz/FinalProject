import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link, NavLink, Switch } from 'react-router-dom'




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

    axios.get('http://localhost:5000/api/user', { withCredentials: true }).then(result => {
      let currentUser = result.data
      this.setState({ user: currentUser })
    })

    axios.get('http://localhost:5000/api/all-dogs', { withCredentials: true }).then(res => {

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
        <Link to='/' key={i} className='eachDog'>
          <p>{dog.name}</p>
          {dog.photos.length > 0 && <img src={dog.photos[0].medium} alt='dog pic' />}
        </Link>
      )
    })
    return dogs
  }


  // getPreferences = () => {

  //   let preferences = this.state.user.preferences;
  //   let { location, children, otherPets, age, size, active, affection, watchful, heat } = this.state.user.preferences

  //   console.log(location);

  // }



  getDogInfo = () => {
    console.log(this.state.dogs[0])

    //let dogName = this.state.dogs[0].name;

    //return <p>{dogName}</p>
  }

  render() {
    return (
      <div className='dogPage'>
        <div className='dogListWrapper'>
          {this.showDogs()}
        </div>

        <div className='dogInfoWrapper'>
          <p>dog name</p>
          {this.getDogInfo()}

          <Switch>

            <Route path="/all-dogs/:id" component={(props) => {}} />

          </Switch>




        </div>

      </div>
    )
  }
}

export default Dogs
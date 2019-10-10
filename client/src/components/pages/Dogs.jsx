import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'




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

      let list = res.data.animals.map((animal, i) => {
        return (animal);
      })
      this.setState({
        dogs: list
      })
    })

  }



  showDogs = () => {
    let dogs = this.state.dogs.map((dog, i) => {
      console.log(dog);
      if (dog.photos.length > 0) {
        // console.log(dog.photos[0].full)
      }
      return (
        <Link to='/' key={i} className='eachDog'>
          <p>{dog.name}</p>
          {dog.photos.length > 0 && <p><img src={dog.photos[0].medium} alt='dog pic' /></p>}
        </Link>
      )
    })

    return dogs
  }



  getPreferences = () => {

    let preferences = this.state.user.preferences;
    let { location, children, otherPets, age, size, active, affection, watchful, heat } = this.state.user.preferences

    console.log(location);

  }







  render() {
    return (
      <div>
        Dogs Page!!!
        {this.showDogs()}
      </div>
    )
  }
}

export default Dogs
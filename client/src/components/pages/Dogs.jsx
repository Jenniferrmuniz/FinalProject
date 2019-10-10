import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Dogs extends Component {
  state = {
    dogs: [],
    toggle: false
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

    // getAllDogs = () => {
    // let list;
    axios.get('http://localhost:5000/api/all-dogs').then(res => {

      let list = res.data.animals.map((animal, i) => {
        return (animal);
      })
      this.setState({
        dogs: list
      })
      console.log("STATE", this.state);

    })

  }

  showDogs = () => {
    let dogs = this.state.dogs.map((dog, i) => {
      if (dog.photos.length > 0) {

        console.log(dog.photos[0].full)
      }
      return (
        <Link to='/' key={i} className='eachDog'>
          <p>{dog.name}</p>
          {dog.photos.length > 0 && <p><img src={dog.photos[0].medium} alt='dog pic'/></p>}
        </Link>
      )
    })
    return dogs
  }




  render() {
    return (
      <div>
        Dogs Page!!!
        {/* <button onClick={() => this.setState({ toggle: !this.state.toggle })}></button>
        {this.state.toggle && this.getAllDogs()} */}
        {this.showDogs()}
      </div>
    )
  }
}

export default Dogs
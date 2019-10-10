import React, { Component } from 'react'
import axios from 'axios'

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
        // console.log(animal)
        return (
          //   <div key={i}>
          //   <h1>HELLO</h1>
          //   <p>{animal.name}</p>
          //   <p><img src='{animal.photos[i].full}' /></p>
          // </div>
          animal
        );
      })
      this.setState({
        dogs: list
      })
      console.log("STATE", this.state);
      // return list;
    })

    // }
  }

  showDogs = () => {
    let dogs = this.state.dogs.map((dog, i) => {
      if (dog.photos.length > 0) {

        console.log(dog.photos[0].full)
      }
      return (
        <div key={i}>
          <p>{dog.name}</p>

          {dog.photos.length > 0 && <p><img src={dog.photos[0].medium} /></p>}
        </div>
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
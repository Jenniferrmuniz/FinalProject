import React, { Component } from 'react'
import axios from 'axios'

class Dogs extends Component {

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


  getAllDogs = () => {
    let list;
    axios.get('http://localhost:5000/api/all-dogs').then(res => {

      let list = res.data.animals.map((animal, i) => {
        console.log(animal.name)
        return (<li key={i}><p>{animal.name}</p></li>);
      })
      console.log(list);
    })

    return list;
  }





  render() {
    return (
      <div>
        Dogs Page!!!
        {this.getAllDogs()}
      </div>
    )
  }
}

export default Dogs
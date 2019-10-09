import React, { Component } from 'react'
// import axios from 'axios'

class Dogs extends Component {
  componentDidMount() {
    // axios.get('http://localhost:5000/api/all-dogs').then(res => {
    //   console.log(res)
    //   let dogPersonality = res.data.breeds.map(eachDog => {
    //     return { [eachDog.name]: { n: Math.random(), a: 0, p: 0 } }
    //   })
    //   console.log(dogPersonality)
    // })
  }
  render() {
    return (
      <div>
        Dogs Page!!!
      </div>
    )
  }
}

export default Dogs
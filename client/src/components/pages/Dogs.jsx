import React, { Component } from 'react'
import axios from 'axios'

class Dogs extends Component {
  componentDidMount() {
    axios.get('http://localhost:5000/api/all-dogs').then(res => {
      console.log(res)
    })
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
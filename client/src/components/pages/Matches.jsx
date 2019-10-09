import React, { Component } from 'react'

class Matches extends Component {




  render() {
    console.log(this.props)
    let { location, age, children, otherPets, size } = this.props.preferences
    return (
      <div>
        Matches page!!!

        <div>
          <div>
            {location}

          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }
}

export default Matches
import React, { Component } from 'react'

class Quiz extends Component {
  render() {
    return (
      <div>
        Personallity quiz page!!!
        <form>

          <p>What City do you live in?</p>
          <input></input>

          <p>Where do you live?</p>
          <button>Apartment</button>
          <button>House</button>


          <p>Children living with you?</p>
          <button>No children</button>
          <button>Children</button>

          <p>Do you have any other pets?</p>
          <button>No other pets</button>
          <button>Dogs</button>
          <button>Cats</button>
          <button>Dogs and Cats</button>

          <p>Puppies are a lot of work! How much energy do you have?</p>
          <button>Puppy</button>
          <button>Young</button>
          <button>Adult</button>

          <p>Would you consider yourself outdoorsy and active?</p>
          <button></button>


          <p>How much training would you like to do?</p>
          <button></button>





          <p>What size dog are you considering? Select all that apply!</p>
          <button>Small dogs</button>
          <button>Medium dogs</button>
          <button>Large dogs</button>


          <p>How much do you exercise?</p>
          <button>Frequently</button>
          <button>Occassionally</button>
          <button>Rarely</button>

          <p>Are you looking for your dog to be a jogging companion?</p>
          <button>Yes</button>
          <button>Now and then</button>
          <button>No, I'm just looking for a companion</button>





        </form>
      </div>
    )
  }
}

export default Quiz
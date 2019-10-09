import React, { Component } from 'react'





class Quiz extends Component {

  state = {
    location: null,
    children: null,
    otherPets: null,
    age: null,
    size: null,
    active: null
  }


  setForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.answers(this.state);
  }



  render() {
    console.log(this.props)
    return (
      <div>
        Personallity quiz page!!!
        <form onSubmit={this.handleSubmit}>

          <div>
            <h6>What City do you live in?</h6>
            <input type='text' name='location' onChange={this.setForm} />
          </div>


          <div>
            <h6>Children living with you?</h6>
            <button type='button' name='children' value='false' onClick={this.setForm}>No children</button>
            <button type='button' name='children' value='true' onClick={this.setForm}>Children</button>
          </div>

          <div>
            <h6>Do you have any other pets?</h6>
            <button type='button' name='otherPets' value='none' onClick={this.setForm}>No other pets</button>
            <button type='button' name='otherPets' value='dogs' onClick={this.setForm}>Dogs</button>
            <button type='button' name='otherPets' value='cats' onClick={this.setForm}>Cats</button>
            <button type='button' name='otherPets' value='both' onClick={this.setForm}>Dogs and Cats</button>
          </div>

          <div>
            <h6>What age are you looking to adopt?</h6>
            <p>(Don't forget, the younger they are the more work and energy they require!)</p>
            <button type='button' name='age' value='puppy' onClick={this.setForm}>Puppy</button>
            <button type='button' name='age' value='young' onClick={this.setForm}> Young</button>
            <button type='button' name='age' value='adult' onClick={this.setForm}>Adult</button>
          </div>


          <div>
            <h6>What size dog are you considering?</h6>
            <button type='button' name='size' value='small' onClick={this.setForm}>Small dogs</button>
            <button type='button' name='size' value='medium' onClick={this.setForm}>Medium dogs</button>
            <button type='button' name='size' value='large' onClick={this.setForm}>Large dogs</button>
          </div>


          <div>
            <h6>How active are you?</h6>
            <button type='button' name='active' value='true' onClick={this.setForm}>Pretty Active</button>
            <button type='button' name='active' value='false' onClick={this.setForm}>Not particularly active</button>
          </div>


          <button type='submit'>Submit Quiz</button>
        </form>
      </div>
    )
  }
}

export default Quiz
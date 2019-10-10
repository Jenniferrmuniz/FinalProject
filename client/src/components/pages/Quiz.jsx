import React, { Component } from 'react'
import Axios from '../../../../server/node_modules/axios'




class Quiz extends Component {

  state = {
    location: null,
    children: null,
    otherPets: null,
    age: null,
    size: null,
    active: null,
    affection: null,
    watchful: null,
    heat: null
  }


  setForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.answers(this.state);
    Axios.post('http://localhost:5000/api/savequiz', this.state, { withCredentials: true }).then(res => {
      this.props.history.push('/matches');
    })
  }



  render() {
    // console.log(this.props)
    return (
      <div>
        Personallity quiz page!!!
        <form onSubmit={this.handleSubmit}>

          <div>
            <h6>What City do you live in?</h6>
            <input type='text' name='location' onChange={this.setForm} />
          </div>

          <div>
            <h6>Do you have any children living with you?</h6>
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
            <h6>What age are you looking to adopt? <p>(Don't forget, the younger they are the more work and energy they require!)</p></h6>
            <button type='button' name='age' value='baby' onClick={this.setForm}>Puppy</button>
            <button type='button' name='age' value='young' onClick={this.setForm}> Young</button>
            <button type='button' name='age' value='adult' onClick={this.setForm}>Adult</button>
            <button type='button' name='age' value='senior' onClick={this.setForm}>Senior</button>
          </div>

          <div>
            <h6>What size dogs do you prefer?</h6>
            <button type='button' name='size' value='small' onClick={this.setForm}>Small dogs</button>
            <button type='button' name='size' value='medium' onClick={this.setForm}>Medium dogs</button>
            <button type='button' name='size' value='large' onClick={this.setForm}>Large dogs</button>
            <button type='button' name='size' value='xlarge' onClick={this.setForm}>Extra large dogs</button>

          </div>

          <div>
            <h6>How active do you consider yourself?</h6>
            <button type='button' name='active' value='10' onClick={this.setForm}>Extremely active, I love exercising and being out and about!</button>
            <button type='button' name='active' value='8' onClick={this.setForm}>Very active, I definitely have a lot of energy.</button>
            <button type='button' name='active' value='6' onClick={this.setForm}>I'm more balanced, I can be active but I also have my lazy days! </button>
            <button type='button' name='active' value='4' onClick={this.setForm}>I'm not particularly active but I have my moments!</button>
            <button type='button' name='active' value='2' onClick={this.setForm}>I'd definitely prefer to be lazy and just relax!</button>


          </div>

          <div>
            <h6>Do you enjoy getting affection?</h6>
            <button type='button' name='affection' value='5' onClick={this.setForm}>Very much, I want affection all the time!</button>
            <button type='button' name='affection' value='4' onClick={this.setForm}>I definitely love getting affection.</button>
            <button type='button' name='affection' value='3' onClick={this.setForm}>I enjoy affection, but I also like having some space.</button>
            <button type='button' name='affection' value='2' onClick={this.setForm}>I like having my space, but I do like a little affection.</button>
            <button type='button' name='affection' value='1' onClick={this.setForm}>I'd rather be independent.</button>
          </div>

          <div>
            <h6>Are you looking for a dog that will keep you safe?</h6>
            <button type='button' name='watchful' value='5' onClick={this.setForm}>Yes! I would love a tough guard dog.</button>
            <button type='button' name='watchful' value='4' onClick={this.setForm}>I don't necessarily want a guard dog but I'd prefer a tougher dog that will keep an eye out.</button>
            <button type='button' name='watchful' value='3' onClick={this.setForm}>I don't want my dog to be too tough but I dont want my dog to be a wimp either!</button>
            <button type='button' name='watchful' value='2' onClick={this.setForm}>I'd prefer a dog that is not menacing but can still watch the house when I'm gone.</button>
            <button type='button' name='watchful' value='1' onClick={this.setForm}>I don't want a watch dog, I just want a companion.</button>

          </div>


          <div>
            <h6>Do you prefer being out in the heat or the cold?</h6>
            <button type='button' name='heat' value='1' onClick={this.setForm}>I love the heat!</button>
            <button type='button' name='heat' value='2' onClick={this.setForm}>I like it hot, but not too much</button>
            <button type='button' name='heat' value='3' onClick={this.setForm}>Somewhere in the middle is perfect!</button>
            <button type='button' name='heat' value='4' onClick={this.setForm}>I love it when it is chilly</button>
            <button type='button' name='heat' value='5' onClick={this.setForm}>Cold sweater weather all the way!</button>
          </div>

          <button type='submit'>Submit Quiz</button>
        </form>
      </div>
    )
  }
}

export default Quiz
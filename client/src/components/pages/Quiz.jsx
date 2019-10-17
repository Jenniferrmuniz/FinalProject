import React, { Component } from 'react'
import Axios from '../../../../server/node_modules/axios'
import baseURL from '../../config'



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
    heat: null,
    nextQ: 0
  }



  // Change state to based on quiz selections
  setForm = (e) => {

    // Next question
    if (e.target.name === 'nextQ') {
      this.setState({
        [e.target.name]: Number(e.target.value)
      })
    }

    // Answers to quiz
    else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }



  // Call parent function to set the state of parent element on submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.answers(this.state);
    Axios.post(`${baseURL}/api/savequiz`, this.state, { withCredentials: true }).then(res => {
      this.props.getMatchingDogs();
      this.props.history.push('/all-dogs');
    }).catch(err => console.error(err))
  }



  // Array of quiz questions that takes in an index and returns a question
  questionBank = (index) => {
    let questions = [
      <div className='question-div'>
        <div className='question'>
          <h6>What City do you live in?</h6>
        </div>
        <div className='quiz-options'>
          <input type='text' name='location' onChange={this.setForm} />
        </div>
        <div className='next-div'>
          <button type='button' name='nextQ' value={this.state.nextQ + 1} onClick={this.setForm} className='nextQ'>Next question</button>
        </div>
      </div>,

      <div className='question-div'>
        <div className='question'>
          <h6>Do you have any children living with you?</h6>
        </div>
        <div className='quiz-options'>
          <button type='button' name='children' className={(this.state.children === "false" ? 'selected' : '')} value='false' onClick={this.setForm}>No children</button>
          <button type='button' name='children' className={(this.state.children === "true" ? 'selected' : '')} value='true' onClick={this.setForm}>Children</button>
        </div>
        <div className='next-div'>
          <button type='button' name='nextQ' value={this.state.nextQ + 1} onClick={this.setForm} className='nextQ'>Next question</button>
        </div>
      </div>,

      <div className='question-div'>
        <div className='question'>
          <h6>Do you have any other pets?</h6>
        </div>
        <div className='quiz-options'>
          <button type='button' name='otherPets' className={(this.state.otherPets === "none" ? 'selected' : '')} value='none' onClick={this.setForm}>No other pets</button>
          <button type='button' name='otherPets' className={(this.state.otherPets === "dogs" ? 'selected' : '')} value='dogs' onClick={this.setForm}>Dogs</button>
          <button type='button' name='otherPets' className={(this.state.otherPets === "cats" ? 'selected' : '')} value='cats' onClick={this.setForm}>Cats</button>
          <button type='button' name='otherPets' className={(this.state.otherPets === "both" ? 'selected' : '')} value='both' onClick={this.setForm}>Dogs and Cats</button>
        </div>
        <div className='next-div'>
          <button type='button' name='nextQ' value={this.state.nextQ + 1} onClick={this.setForm} className='nextQ'>Next question</button>
        </div>
      </div>,

      <div className='question-div'>
        <div className='question'>
          <h6>What age are you looking to adopt? <p>(Don't forget, the younger they are the more work and energy they require!)</p></h6>
        </div>
        <div className='quiz-options'>
          <button type='button' name='age' className={(this.state.age === "baby" ? 'selected' : '')} value='baby' onClick={this.setForm}>Puppy</button>
          <button type='button' name='age' className={(this.state.age === "young" ? 'selected' : '')} value='young' onClick={this.setForm}> Young</button>
          <button type='button' name='age' className={(this.state.age === "adult" ? 'selected' : '')} value='adult' onClick={this.setForm}>Adult</button>
          <button type='button' name='age' className={(this.state.age === "senior" ? 'selected' : '')} value='senior' onClick={this.setForm}>Senior</button>
        </div>
        <div className='next-div'>
          <button type='button' name='nextQ' value={this.state.nextQ + 1} onClick={this.setForm} className='nextQ'>Next question</button>
        </div>
      </div>,

      <div className='question-div'>
        <div className='question'>
          <h6>What size dogs do you prefer?</h6>
        </div>
        <div className='quiz-options'>
          <button type='button' name='size' className={(this.state.size === "small" ? 'selected' : '')} value='small' onClick={this.setForm}>Small dogs</button>
          <button type='button' name='size' className={(this.state.size === "medium" ? 'selected' : '')} value='medium' onClick={this.setForm}>Medium dogs</button>
          <button type='button' name='size' className={(this.state.size === "large" ? 'selected' : '')} value='large' onClick={this.setForm}>Large dogs</button>
          <button type='button' name='size' className={(this.state.size === "xlarge" ? 'selected' : '')} value='xlarge' onClick={this.setForm}>Extra large dogs</button>
        </div>
        <div className='next-div'>
          <button type='button' name='nextQ' value={this.state.nextQ + 1} onClick={this.setForm} className='nextQ'>Next question</button>
        </div>

      </div>,

      <div className='question-div'>
        <div className='question'>
          <h6>How active do you consider yourself?</h6>
        </div>
        <div className='quiz-options'>
          <button type='button' name='active' className={(this.state.active === "10" ? 'selected' : '')} value='10' onClick={this.setForm}>Extremely active, I love exercising and being out and about!</button>
          <button type='button' name='active' className={(this.state.active === "8" ? 'selected' : '')} value='8' onClick={this.setForm}>Very active, I definitely have a lot of energy.</button>
          <button type='button' name='active' className={(this.state.active === "6" ? 'selected' : '')} value='6' onClick={this.setForm}>I'm more balanced, I can be active but I also have my lazy days! </button>
          <button type='button' name='active' className={(this.state.active === "4" ? 'selected' : '')} value='4' onClick={this.setForm}>I'm not particularly active but I have my moments!</button>
          <button type='button' name='active' className={(this.state.active === "2" ? 'selected' : '')} value='2' onClick={this.setForm}>I'd definitely prefer to be lazy and just relax!</button>
        </div>
        <div className='next-div'>
          <button type='button' name='nextQ' value={this.state.nextQ + 1} onClick={this.setForm} className='nextQ'>Next question</button>
        </div>
      </div>,

      <div className='question-div'>
        <div className='question'>
          <h6>Do you enjoy getting affection?</h6>
        </div>
        <div className='quiz-options'>
          <button type='button' name='affection' className={(this.state.affection === "5" ? 'selected' : '')} value='5' onClick={this.setForm}>Very much, I want affection all the time!</button>
          <button type='button' name='affection' className={(this.state.affection === "4" ? 'selected' : '')} value='4' onClick={this.setForm}>I definitely love getting affection.</button>
          <button type='button' name='affection' className={(this.state.affection === "3" ? 'selected' : '')} value='3' onClick={this.setForm}>I enjoy affection, but I also like having some space.</button>
          <button type='button' name='affection' className={(this.state.affection === "2" ? 'selected' : '')} value='2' onClick={this.setForm}>I like having my space, but I do like a little affection.</button>
          <button type='button' name='affection' className={(this.state.affection === "1" ? 'selected' : '')} value='1' onClick={this.setForm}>I'd rather be independent.</button>
        </div>
        <div className='next-div'>
          <button type='button' name='nextQ' value={this.state.nextQ + 1} onClick={this.setForm} className='nextQ'>Next question</button>
        </div>
      </div>,

      <div className='question-div'>
        <div className='question'>
          <h6>Are you looking for a dog that will keep you safe?</h6>
        </div>
        <div className='quiz-options'>
          <button type='button' name='watchful' className={(this.state.watchful === "5" ? 'selected' : '')} value='5' onClick={this.setForm}>Yes! I would love a tough guard dog.</button>
          <button type='button' name='watchful' className={(this.state.watchful === "4" ? 'selected' : '')} value='4' onClick={this.setForm}>I don't necessarily want a guard dog but I'd prefer a tougher dog that will keep an eye out.</button>
          <button type='button' name='watchful' className={(this.state.watchful === "3" ? 'selected' : '')} value='3' onClick={this.setForm}>I don't want my dog to be too tough but I dont want my dog to be a wimp either!</button>
          <button type='button' name='watchful' className={(this.state.watchful === "2" ? 'selected' : '')} value='2' onClick={this.setForm}>I'd prefer a dog that is not menacing but can still watch the house when I'm gone.</button>
          <button type='button' name='watchful' className={(this.state.watchful === "1" ? 'selected' : '')} value='1' onClick={this.setForm}>I don't want a watch dog, I just want a companion.</button>
        </div>
        <div className='next-div'>
          <button type='button' name='nextQ' value={this.state.nextQ + 1} onClick={this.setForm} className='nextQ'>Next question</button>
        </div>
      </div>,

      <div className='question-div'>
        <div className='question'>
          <h6>Do you prefer being out in the heat or the cold?</h6>
        </div>
        <div className='quiz-options'>
          <button type='button' name='heat' className={(this.state.heat === "1" ? 'selected' : '')} value='1' onClick={this.setForm}>I love the heat!</button>
          <button type='button' name='heat' className={(this.state.heat === "2" ? 'selected' : '')} value='2' onClick={this.setForm}>I like it hot, but not too much</button>
          <button type='button' name='heat' className={(this.state.heat === "3" ? 'selected' : '')} value='3' onClick={this.setForm}>Somewhere in the middle is perfect!</button>
          <button type='button' name='heat' className={(this.state.heat === "4" ? 'selected' : '')} value='4' onClick={this.setForm}>I love it when it is chilly</button>
          <button type='button' name='heat' className={(this.state.heat === "5" ? 'selected' : '')} value='5' onClick={this.setForm}>Cold sweater weather all the way!</button>
        </div>
        <div className='next-div'>
          <button type='submit' onClick={this.handleSubmit} name='nextQ' className='nextQ'>Submit Quiz</button>
        </div>
      </div>
    ]

    return questions[index];
  }






  render() {
    return (
      <div className='quizPage'>
        {this.questionBank(this.state.nextQ)}
      </div>
    )
  }
}

export default Quiz
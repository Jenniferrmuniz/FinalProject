import React, { Component } from 'react'
import api from '../../api'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      name: '',
      password: '',
      message: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }


  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.isLoggedIn()
        this.props.history.push('/') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Signup">

        <div class='background-dog'>
          <img src='../../../dog.png' />
        </div>

        <div className='signUp-form'>
          <h2>Signup</h2>
          <form>
            <div>
              Username:{' '}
              <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} />{' '}
            </div>
            <div>
              Email:{' '}
              <input type="email" value={this.state.email} name="email" onChange={this.handleInputChange} />{' '}
            </div>
            <div>
              Password:{' '}
              <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} />{' '}
            </div>
            <div>
              <button onClick={e => this.handleClick(e)}>Signup</button>
            </div>
          </form>
          {this.state.message && (<div className="info info-danger">{this.state.message}</div>)}
        </div>


      </div>
    )
  }
}

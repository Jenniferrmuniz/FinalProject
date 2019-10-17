import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
import Dogs from './pages/Dogs'
import Quiz from './pages/Quiz'
import Matches from './pages/Matches'
import Axios from '../../../server/node_modules/axios'
import baseURL from '../config'


export default class App extends Component {
  state = {
    user: {},
    topMatch: { photos: [{ small: '../../loading.gif' }] },
    dogs: []
  }


    // Get user info when page mounts
    componentDidMount() {
      this.isLoggedIn()
      this.getMatchingDogs()
    }


    isLoggedIn = () => {
      Axios.get(`${baseURL}/api/user`, { withCredentials: true }).then(result => {
        let user = result.data
        this.setState({ user })
      })
    }


  // Log out user
  handleLogoutClick(e) {
    api.logout().then(res => {
      // console.log(res)
      //this.isLoggedIn()
      this.setState({ user: {} })
    })
  }



  // Set user preferences after taking the quiz
  setPreferences = (preferences) => {
    let user = { ...this.state.user }
    user.preferences = preferences
    this.setState({
      user
    })
  }







  getMatchingDogs = () => {
    Axios.get(`${baseURL}/api/all-dogs`, { withCredentials: true }).then(res => {

      //console.log(res.data);
      let list = res.data.map((animal, i) => {
        return (animal);
      })
      this.setState({
        dogs: list,
        topMatch: list[0]
      })
      //console.log('LIST[0] ======== ', list[0]);
      //this.props.topMatch(list[0]);
    })
  }

  showNav = () => {
    if (this.state.user.username) {
      return (

        <React.Fragment>
          <NavLink className='navlink' to="/all-dogs">All dogs</NavLink>
          <NavLink className='navlink' to="/quiz">Quiz</NavLink>
          <NavLink className='navlink' to="/matches">Matches</NavLink>
          <Link className='navlink' to="/" onClick={e => this.handleLogoutClick(e)}>Logout</Link>
        </React.Fragment>

      )
    } else {
      return (
        <React.Fragment>
          <NavLink className='navlink' to="/signup">Signup</NavLink>
          <NavLink className='navlink' to="/login">Login</NavLink>
        </React.Fragment>

      )
    }
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <div className='pet-harmony-logo'>
            <img className='nav-icon' src='../../white-icon.png' />
            <h3>Pet Harmony</h3>
          </div>

          <NavLink className='navlink' to="/" exact>Home</NavLink>

          {this.showNav()}

        </header>

        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={(props) => <Home info={this.state.user} topMatch={this.state.topMatch} {...props} />} />
          <Route path="/signup" component={(props) => <Signup isLoggedIn={this.isLoggedIn} {...props} />} />
          <Route path="/login" component={(props) => <Login isLoggedIn={this.isLoggedIn} {...props} />} />
          <Route path="/all-dogs" component={(props) => <Dogs getMatchingDogs={this.getMatchingDogs} dogs={this.state.dogs} {...props} />} />
          <Route path="/quiz" component={(props) => <Quiz {...props} answers={this.setPreferences} />} />
          <Route path="/matches" component={(props) => <Matches preferences={this.state.user} />} />
          <Route render={() => <h2>404</h2>} />
        </Switch>



      </div>
    )
  }
}

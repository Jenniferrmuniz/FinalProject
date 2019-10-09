import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
import Dogs from './pages/Dogs'
import Quiz from './pages/Quiz'
import Matches from './pages/Matches'

export default class App extends Component {

  state = {
    match: {
      location: null,
      children: null,
      otherPets: null,
      age: null,
      size: null,
      active: null
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }


  setPreferences = (preferences) => {
    this.setState({
      match: preferences
    })
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/all-dogs">All dogs</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/matches">Matches</NavLink>



          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}
          <NavLink to="/secret">Secret</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route path="/all-dogs" component={Dogs} />
          <Route path="/quiz" component={(props) => <Quiz answers={this.setPreferences} />} />
          <Route path="/matches" component={ <Matches preferences={this.state.match}/> } />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}

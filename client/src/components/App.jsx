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

export default class App extends Component {

  state = {
    user: {}
  }

  handleLogoutClick(e) {
    api.logout().then(res => {
      // console.log(res)
      //this.isLoggedIn()
      this.setState({ user: {} })
    })
  }


  setPreferences = (preferences) => {
    this.setState({
      user: preferences
    })
  }


  componentDidMount() {
    // console.log('fetch the user once')
    this.isLoggedIn()
  }


  isLoggedIn = () => {
    Axios.get('http://localhost:5000/api/user', { withCredentials: true }).then(result => {
      // console.log(result)
      let user = result.data
      // console.log(user)
      //if (user) {
      this.setState({ user })
      //}
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
          <NavLink className='navlink' to="/" exact>Home {this.state.user.username}</NavLink>

          {/* {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (<Link to="/" onClick={e => this.handleLogoutClick(e)}>Logout</Link>)}

          {api.isLoggedIn() && <NavLink to="/secret">Secret</NavLink>} */}

          {this.showNav()}

        </header>

        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={(props) => <Home info={this.state.user} {...props} />} />
          <Route path="/signup" component={(props) => <Signup isLoggedIn={this.isLoggedIn} {...props} />} />
          <Route path="/login" component={(props) => <Login isLoggedIn={this.isLoggedIn} {...props} />} />
          <Route path="/all-dogs" component={Dogs} />
          <Route path="/quiz" component={(props) => <Quiz {...props} answers={this.setPreferences} />} />
          <Route path="/matches" component={(props) => <Matches preferences={this.state.user} />} />
          <Route render={() => <h2>404</h2>} />
        </Switch>



      </div>
    )
  }
}

import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'
import StrictAcess from './components/StrictAccess';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';

const obj = {
  username: "joao",
  password: 1234,
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users/admin">Users</Link></li>
        </ul>
        <Switch>
          <Route path="/users/:id/" render={ (props) => <Users {...props} greetingsMessage="Good Morning" /> } />
          <Route path="/strict-acess" render={ (props) => <StrictAcess {...props} user={obj} /> } />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

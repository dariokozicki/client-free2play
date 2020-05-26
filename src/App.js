import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './components/Navigation'
import GamesList from './components/GamesList'
import LogIn from './components/LogIn'
import UserProfile from './components/UserProfile'
import Game from './components/Game';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';

localStorage.setItem('favoriteGames', localStorage.getItem('favoriteGames') || JSON.stringify([]))

function App() {

  return (
    <Router>
      <Navigation />


      <Route path="/" component={Home} exact />
      <Route path="/login" component={LogIn} />
      <Route path="/games" component={GamesList} exact />
      <Route path="/user" component={UserProfile} />
      <Route path="/games/:id" component={Game} />
      <Route path="/about" component={About} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={UserProfile} />
    </Router>
  );
}

export default App;

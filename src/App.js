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
import axios from 'axios'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      user: {
        username: 'Guest',
        image: 'images/default-profile.png'
      },
      token: localStorage.getItem('x-auth-token'),
      favorites: JSON.parse(localStorage.getItem('favoriteGames'))
    }
    if (!this.state.favorites) {
      localStorage.setItem('favoriteGames', JSON.stringify([]))
      this.state.favorites = []
    }
  }

  componentDidMount = async () => {
    const token = localStorage.getItem('x-auth-token');
    this.setUserData(token);
  }

  setUserData = async (token) => {
    if (token) {
      axios.defaults.headers['x-auth-token'] = token;
      localStorage.setItem('x-auth-token', token);
      let user;
      try {
        user = await axios.get("http://localhost:4000/api/users/current")
      } catch (e) {
        localStorage.removeItem('x-auth-token')
      }
      if (user?.data) {
        const favorites = await axios.get("http://localhost:4000/api/users/"
          + user.data._id
          + "/favorites")
        this.setState({ user: user.data, token: token, favorites: favorites.data })
      } else {
        localStorage.removeItem('x-auth-token')
      }
    }
  }

  signIn = async (username, password) => {
    const login = await axios.post('http://localhost:4000/api/users/login',
      {
        username: username,
        password: password
      }
    )
    if (login?.status === 200) {
      const token = login.headers['x-auth-token'];
      this.setUserData(token);
      window.location = "/games"
    }
  }

  signOut = () => {
    localStorage.removeItem('x-auth-token')
    this.setState(
      {
        user: {
          username: 'Guest',
          image: 'images/default-profile.png'
        },
        token: null,
        favorites: JSON.parse(localStorage.getItem('favoriteGames')) || []
      }
    )
  }

  addToFavorites = async (game) => {
    if (this.state.token) {
      const res = await axios.put('http://localhost:4000/api/users/'
        + this.state.user._id
        + '/favorites',
        game
      );
      if (res.status === 201) {
        this.updateFavorites();
      } else {
        alert('Algo salio mal');
      }
    } else {
      let favorites = JSON.parse(localStorage.getItem('favoriteGames'));
      favorites.push(game);
      this.setState({ favorites: favorites });
      localStorage.setItem('favoriteGames', JSON.stringify(favorites));
    }
  }

  removeFromFavorites = async (game) => {
    if (this.state.token) {
      const res = await axios.delete('http://localhost:4000/api/users/'
        + this.state.user._id
        + '/favorites/' + game._id
      );
      if (res.status === 204) {
        this.updateFavorites();
      } else {
        alert('Algo salio mal');
      }
    } else {
      let favorites = JSON.parse(localStorage.getItem('favoriteGames'));
      favorites = favorites.filter(
        fav => fav.websiteId !== game.websiteId ||
          fav.website !== game.website);
      this.setState({ favorites: favorites });
      localStorage.setItem('favoriteGames', JSON.stringify(favorites));
    }
  }

  updateFavorites = async () => {
    const favorites = await axios.get('http://localhost:4000/api/users/'
      + this.state.user._id
      + '/favorites'
    );
    this.setState({ favorites: favorites.data })
  }

  render = () => {
    return (
      <Router>
        <Navigation token={this.state.token} signOut={this.signOut} />

        <Route path="/"
          component={Home} exact />
        <Route path="/signin"
          render={(props) => <LogIn {...props} signIn={this.signIn} />} />
        <Route path="/games"
          render={(props) =>
            <GamesList {...props}
              favorites={this.state.favorites}
              addToFavorites={this.addToFavorites}
              removeFromFavorites={this.removeFromFavorites}
            />} />
        <Route path="/games/:id"
          component={Game} />
        <Route path="/about"
          component={About} />
        <Route path="/register"
          render={(props) => <Register {...props} signIn={this.signIn} />} />
        <Route path="/profile"
          render={(props) =>
            <UserProfile {...props}
              user={this.state.user}
              favorites={this.state.favorites}
              addToFavorites={this.addToFavorites}
              removeFromFavorites={this.removeFromFavorites}
            />} />
      </Router>
    );
  }
}
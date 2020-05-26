import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Game from './Game'
export default class UserProfile extends Component {

  state = {
    favorites: JSON.parse(localStorage.getItem('favoriteGames'))
  }
  showGames = () => {
    if (this.state.favorites.length === 0) {
      return <h5 style={{ color: "white" }}>You have no favorites yet.</h5>
    } else {
      return (<div className="row" style={{ justifyContent: "space-between" }}>
        {this.state.favorites.map(game =>
          <Game game={game} />
        )}
      </div>)
    }
  }

  render() {
    return (
      <div className="container p-4" style={{ color: "white" }}>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" >
            <h1>Your profile</h1>
            <h5>You're signed in as a guest. If you'd like to save your favorites or upload an image, please log in or register.</h5>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" style={{ padding: "0px" }} >
            <Image src="images/default-profile.png" fluid />
            <div style={{
              width: "100%",
              height: "30px",
              position: "absolute",
              left: "0",
              bottom: "0px",
              backgroundColor: "rgba(255,0,110, 0.7)",
              alignItems: "center",
              justifyContent: "center",
              display: "flex"
            }}>
              <h5>Guest</h5>
            </div>
          </div>
        </div>

        <br></br><br></br>
        <i class="fas fa-star fa-2x" style={{ color: "#FF006E" }}></i><h3 style={{ display: "inline", marginLeft: "20px" }}>Favorites</h3>
        <br></br><br></br>
        {this.showGames()}
      </div >
    )
  }
}

import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Game from './Game'
export default class UserProfile extends Component {

  showGames = () => {
    if (this.props.favorites.length === 0) {
      return <h5 style={{ color: "white" }}>You have no favorites yet.</h5>
    } else {
      return (<div className="row" style={{ justifyContent: "left" }}>
        {
          this.props.favorites.map((game, i) =>
            <Game
              key={game._id}
              game={game}
              favorites={this.props.favorites}
              addToFavorites={this.props.addToFavorites}
              removeFromFavorites={this.props.removeFromFavorites} />
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
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" style={{ padding: "0px" }} >
            <div style={{ position: "relative", width: "300px", height: "300px" }}>
              <Image src={this.props.user.image} fluid />
              <div style={{
                width: "100%",
                height: "30px",
                position: "absolute",
                backgroundColor: "rgba(var(--color-2),1)",
                justifyContent: "center",
                display: "flex"
              }}>
                <h5 style={{ fontWeight: "bolder" }}>{this.props.user.username}</h5>
              </div>
            </div>
          </div>
        </div>

        <br></br><br></br>
        <i className="fas fa-star fa-2x" style={{ color: "rgb(var(--color-3))" }}></i><h3 style={{ display: "inline", marginLeft: "20px" }}>Favorites</h3>
        <br></br><br></br>
        {this.showGames()}
      </div >
    )
  }
}

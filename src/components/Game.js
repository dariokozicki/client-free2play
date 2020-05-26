import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export default class Game extends Component {

  formatDateFromString = (stringDate) => {
    const date = new Date(stringDate);
    return date.toLocaleDateString()
  }

  addOrRemoveFromFavorites = (game) => {
    const favorites = JSON.parse(localStorage.getItem('favoriteGames'));
    const storageGames = favorites.filter(stgame => { return stgame.title === game.title });
    if (storageGames.length > 0) {
      localStorage.setItem('favoriteGames', JSON.stringify(
        favorites.filter(stgame => stgame.title !== game.title))
      );
    } else {
      favorites.push(game);
      localStorage.setItem('favoriteGames', JSON.stringify(
        favorites
      ))
    }
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-3" >
        <div className="card box bg-secondary" style={{ marginBottom: "5vh", cursor: "pointer" }}>
          <a href={this.props.game.url} >
            <Image
              src={this.props.game.image}
              alt={this.props.game.title}
              fluid

            />
          </a>
          <i
            class="fas fa-star fa-2x"
            style={{ position: "absolute", bottom: "5px", left: "5px", color: "#FF006E" }}
            onClick={() => this.addOrRemoveFromFavorites(this.props.game)}
          >
          </i>
          <div style={{
            position: "absolute", top: "0",
            right: "0", backgroundColor: "#FF006E", width: "100px", color: "white", fontWeight: "bold"
          }}>
            {this.props.game.category || 'Action'}
          </div>
          <div className="card-body">
            <h5 className="card-title text-light">
              {this.props.game.title}
            </h5>
            <div style={{ float: "left" }} className="card-text text-light">
              {this.props.game.publisher}
            </div>
            <div style={{ float: "right", fontWeight: "bold" }} className="card-text text-light">
              FREE
                  </div>
          </div>
          <div className="card-footer" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <small className="text-light">
              Created at {this.formatDateFromString(this.props.game.createdAt)}
            </small>
          </div>
        </div>
      </div>
    )
  }
}
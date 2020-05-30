import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export default class Game extends Component {

  formatDateFromString = (stringDate) => {
    const date = new Date(stringDate);
    return date.toLocaleDateString()
  }

  addOrRemoveFromFavorites = (game) => {
    if (this.isFavorite()) {
      this.props.removeFromFavorites(game)
    } else {
      this.props.addToFavorites(game)
    }
  }

  isFavorite = () => {
    return this.props.favorites.some(
      (fav) => fav.website === this.props.game.website &&
        fav.websiteId === this.props.game.websiteId
    )
  }

  getFavoriteCss = () => {
    return this.isFavorite()
      ? "favorite fas" : "far"
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
        <div className="card box bg-secondary" style={{ marginBottom: "5vh", cursor: "pointer", height: "400px" }}>
          <a href={this.props.game.url} style={{ position: "relative" }}>
            <Image
              src={this.props.game.image}
              alt={this.props.game.title}
              fluid
              style={{ height: "200px" }}
            />
            <div style={{
              position: "absolute", bottom: "0", borderRadius: "20px 0 0 20px", paddingLeft: "10px",
              right: "0", backgroundColor: "rgb(var(--color-2))", width: "120px", color: "white", fontWeight: "bold"
            }}>
              {this.props.game.category}
            </div>
          </a>
          <i
            className={"fa-star fa-2x " + this.getFavoriteCss()}
            onClick={() => this.addOrRemoveFromFavorites(this.props.game)}
          >
          </i>
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
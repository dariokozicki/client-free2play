import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export default class GamesList extends Component {
  state = {
    backendUrl: process.env.REACT_APP_BACKEND_URL || 'localhost:4000',
    games: []
  }

  componentDidMount = async () => {
    console.log(BASE_URL)
    const res = await axios.get((this.state.backendUrl + '/api/games'));
    console.log(res.data);
    this.setState({ games: res.data });
  }

  formatDateFromString(stringDate) {
    const date = new Date(stringDate);
    return date.toLocaleDateString()
  }

  render() {
    return (
      <div style={{ margin: "2.5rem 3rem 0 3rem", overflow: "visible" }}>
        <div className="row" style={{ justifyContent: "space-between" }}>
          {this.state.games.map(game =>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-3" >
              <div className="card box bg-secondary" style={{ marginBottom: "5vh", cursor: "pointer" }}>
                <a href={game.url} >
                  <img className="card-img-top"
                    src={game.image}
                    alt={game.title} />
                </a>
                <div style={{
                  position: "absolute", top: "0",
                  right: "0", backgroundColor: "#FF006E", width: "100px", color: "white", fontWeight: "bold"
                }}>
                  {game.category || 'Action'}
                </div>
                <div className="card-body">
                  <h5 className="card-title text-light">
                    {game.title}
                  </h5>
                  <div style={{ float: "left" }} className="card-text text-light">
                    {game.publisher}
                  </div>
                  <div style={{ float: "right", fontWeight: "bold" }} className="card-text text-light">
                    FREE
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-light">
                    Last updated at {this.formatDateFromString(game.updatedAt)}
                  </small>
                </div>
              </div>
            </div>
          )
          }
        </div>
      </div >
    )
  }
}

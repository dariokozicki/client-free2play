import React, { Component } from 'react'
import axios from 'axios'

export default class GamesList extends Component {
  state = {
    games: []
  }

  componentDidMount = async () => {
    const res = await axios.get('http://localhost:4000/api/games')
    console.log(res.data);
    this.setState({ games: res.data });
  }

  render() {
    return (
      <div style={{ margin: "2.5rem 3rem 0 3rem", overflow: "visible" }}>
        <div className="row" style={{ justifyContent: "space-between" }}>
          {this.state.games.map(game =>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-3" >
              <div className="card box bg-secondary" style={{ marginBottom: "5vh" }}>
                <img className="card-img-top"
                  src={game.image}
                  alt={game.title} />
                <div className="card-body">
                  <h5 className="card-title text-light">
                    {game.title}
                  </h5>
                  <p className="card-text text-light">
                    {game.description}
                  </p>
                  <div style={{ float: "left" }} className="card-text text-light">
                    {game.publisher}
                  </div>
                  <div style={{ float: "right", fontWeight: "bold" }} className="card-text text-light">
                    FREE
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-light">
                    Last updated at {game.updatedAt}
                  </small>
                </div>
              </div>
            </div>
          )
          }
        </div>
      </div>
    )
  }
}

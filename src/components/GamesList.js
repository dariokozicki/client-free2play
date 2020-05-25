import React, { Component } from 'react'
import axios from 'axios'
import Pagination from 'react-bootstrap/Pagination'

const BASE_URL = process.env.REACT_APP_BACKEND_URL || 'localhost:4000';

export default class GamesList extends Component {
  state = {
    active: 1,
    games: [],
    total: null
  }

  componentDidMount = async () => {
    this.getGamePage(1);
  }

  getGamePage = async (pageNum) => {
    const res = await axios.get((BASE_URL + '/api/games?pageNum=' + pageNum));
    this.setState({ games: res.data.games, total: res.data.total, active: pageNum });
    window.scrollTo(0, 0);
  }

  formatDateFromString(stringDate) {
    const date = new Date(stringDate);
    return date.toLocaleDateString()
  }

  paginate = () => {
    let pages = [];
    let amountPages = Math.ceil(this.state.total / 12);
    pages.push(<Pagination.First key={-1} onClick={() => this.getGamePage(1)} />)
    pages.push(<Pagination.Prev key={0} onClick={() => this.getGamePage((this.state.active === 1 ? 1 : this.state.active - 1))} />)
    for (let i = this.state.active; i < this.state.active + 3; i++) {
      pages.push(
        <Pagination.Item key={i} active={i === this.state.active} onClick={() => this.getGamePage(i)}>
          {i}
        </Pagination.Item>
      )
    }
    if (this.state.active <= amountPages - 4) {
      pages.push(<Pagination.Ellipsis key={-2} />)
      pages.push(<Pagination.Item key={amountPages} onClick={() => this.getGamePage(amountPages)}>{amountPages}</Pagination.Item>)
    }
    pages.push(<Pagination.Next key={amountPages + 1} onClick={() => this.getGamePage(this.state.active === 1 ? 1 : this.state.active + 1)} />)
    pages.push(<Pagination.Last key={amountPages + 2} onClick={() => this.getGamePage(amountPages)} />)

    return pages;
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
        <Pagination style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{this.paginate()}</Pagination>
      </div >
    )
  }
}

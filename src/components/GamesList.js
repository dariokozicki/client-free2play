import React, { Component } from 'react'
import axios from 'axios'
import Game from './Game'
import Pagination from 'react-bootstrap/Pagination'
import Form from 'react-bootstrap/Form'
const BASE_URL = process.env.REACT_APP_BACKEND_URL || 'localhost:4000';

export default class GamesList extends Component {
  state = {
    active: 1,
    games: [],
    search: '',
    total: null
  }

  componentDidMount = async () => {
    this.getGamePage(1);
  }

  getGamePage = async (pageNum, event) => {
    let search;
    if (event) {
      event.preventDefault();
      search = event.target.elements.search.value
    } else {
      search = ""
    }
    const params = {
      pageNum: pageNum,
      search: search
    }
    const res = await axios.get(
      BASE_URL + '/api/games', {
      params
    });
    this.setState({ games: res.data.games, total: res.data.total, active: pageNum, search: search });
    window.scrollTo(0, 0);
  }


  paginate = () => {
    let pages = [];
    const event = {
      preventDefault: () => { },
      target: {
        elements: {
          search: {
            value: this.state.search
          }
        }
      }
    }
    let amountPages = Math.ceil(this.state.total / 12);
    if (amountPages >= 5) {
      pages.push(<Pagination.First key={-1} onClick={() => this.getGamePage(1, event)} />)
      pages.push(<Pagination.Prev key={0} onClick={() => this.getGamePage((this.state.active === 1 ? 1 : this.state.active - 1), event)} />)
      if (this.state.active <= amountPages - 4) {
        for (let i = this.state.active; i < this.state.active + 3; i++) {
          pages.push(
            <Pagination.Item key={i} active={i === this.state.active} onClick={() => this.getGamePage(i, event)}>
              {i}
            </Pagination.Item>
          )
        }
        pages.push(<Pagination.Ellipsis key={-2} />)
        pages.push(<Pagination.Item key={amountPages} onClick={() => this.getGamePage(amountPages, event)}>{amountPages}</Pagination.Item>)
      } else {
        for (let i = amountPages - 3; i <= amountPages; i++) {
          pages.push(
            <Pagination.Item key={i} active={i === this.state.active} onClick={() => this.getGamePage(i, event)}>
              {i}
            </Pagination.Item>
          )
        }
      }
      pages.push(<Pagination.Next key={amountPages + 1} onClick={() => this.getGamePage(this.state.active === amountPages ? amountPages : this.state.active + 1, event)} />)
      pages.push(<Pagination.Last key={amountPages + 2} onClick={() => this.getGamePage(amountPages, event)} />)

    } else {
      for (let i = 1; i <= amountPages; i++) {
        pages.push(
          <Pagination.Item key={i} active={i === this.state.active} onClick={() => this.getGamePage(i, event)}>
            {i}
          </Pagination.Item>
        )
      }
    }

    return pages;
  }

  showGames = () => {
    if (this.state.games.length === 0) {
      return <h5 style={{ color: "white" }}>No results were found to match your search item.</h5>
    } else {
      return (<div className="row" style={{ justifyContent: "left" }}>
        {this.state.games.map(game =>
          <Game game={game} />
        )}
      </div>)
    }
  }

  render() {
    return (
      <div style={{ margin: "2.5rem 3rem 0 3rem", overflow: "visible" }}>
        <Form onSubmit={(e) => this.getGamePage(1, e)}>
          <Form.Group>
            <Form.Control type="text" name="search" placeholder="Search by title, website of origin, category, or publisher" />
            <Form.Text
              style={{ color: "white" }}
            >
              i.e 'EpicGames', 'Witcher 3', 'Strategy'
            </Form.Text>
          </Form.Group>
        </Form>
        {this.showGames()}
        <Pagination style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {this.paginate()}
        </Pagination>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Markup } from 'interweave';

const link = (text, where) => {
  return "<a style='text-decoration:underline; color:white' href='" + where + "'>" + text + "</a>"
}

export default class About extends Component {

  state = {
    qa: [
      {
        question: "Which websites does FREE2PLAY pull games from?",
        response: "Currently: " + link('Origin.com', 'https://origin.com') + ", " + link('EpicGames.com', 'https://epicgames.com') + ", " + link('GOG.com', 'https://gog.com') + ", " + link('GameJolt.com', 'https://gamejolt.com') + "."
      },
      {
        question: "How often does FREE2PLAY update?",
        response: "Daily."
      },
      {
        question: "How was this made?",
        response: "FREE2PLAY is a MERN project, which means it uses MongoDB, ExpressJS, ReactJS, and NodeJS."
      },
      {
        question: "Can I see the source code?",
        response: "Thought you'd never ask! You can find the client application " + link('here', 'https://github.com/dariokozicki/client-free2play') + " and the server application " + link('here', 'https://github.com/dariokozicki/server-free2play') + "."
      },
      {
        question: "Who did this?",
        response: "Hi! My name is Darío Kozicki. I'm a developer living in Buenos Aires, Argentina. " + link('Here', 'https://thekozicki.tk') + " you'll find a live porfolio with my latest freelance projects. For any business inquiries, you can contact me at " + link('dariokozicki@gmail.com', 'mailto:dariokozicki@gmail.com')
      }
    ]
  }

  render() {
    return (
      <div className="container p-4" style={{ color: "white" }}>
        <h2>About this website</h2>
        <br></br>
        <p>Hey there! Thanks for coming by.</p>
        <p>Every day, hundreds of games are being released in an ever increasing amount of websites, some of them really worth playing! FREE 2 PLAY's goal is for you to stay up to date with these amazing games, without having to check in to their websites on a regular basis.</p>
        <p>You can browse for games by title, category, publisher or even their original website! By clicking on one of them you'll be redirected to the download page, legally and at no cost.</p>
        <p>Below you'll find a FAQ in case you'd like to know more!</p>
        <Accordion>
          {this.state.qa.map((qaSet, idx) => (
            <Card className="bg-secondary" key={qaSet.question}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="dark" eventKey={idx}>
                  {qaSet.question}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={idx}>
                <Card.Body><Markup content={qaSet.response} /></Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>

    )
  }
}

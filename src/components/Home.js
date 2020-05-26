import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class Home extends Component {
  state = {
    images: [
      {
        src: 'images/carousel1.jpg',
        title: 'Welcome to FREE2PLAY',
        desc: 'Counter Strike: Global Offensive'
      },
      {
        src: 'images/carousel2.jpg',
        title: "100% Free Games",
        desc: 'Warframe'

      },
      {
        src: 'images/carousel3.jpg',
        title: "All your favorite platforms",
        desc: 'Rocket League'
      }
    ]
  }

  render() {
    return (
      <div style={{
        overflow: "hidden",
        height: "100%"
      }}>
        <Carousel interval={3000}>
          {this.state.images.map(image =>
            <Carousel.Item
              key={image.title}
              style={{ 'height': "93vh" }}>
              <img style={{ 'height': "93vh", objectFit: "cover" }}
                className="d-block w-100"
                src={image.src}
                alt={image.desc}
              />
              <Carousel.Caption>
                <h3>{image.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      </div>
    )
  }
}

import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaMusic, FaShuttleVan, FaCoffee } from "react-icons/fa";


export default class Services extends Component {
    state = {
        services: [
          {
            icon: <FaCocktail />,
            title: "With Juice",
            info:
            "In the midst of our daily lives, we must find the juice to nourish our creative souls."
          },
          {
            icon: <FaMusic />,
            title: "Endless music",
            info:
              "The world is a book and those who do not travel read only one page."
          },
          {
            icon: <FaShuttleVan />,
            title: "Travel Love",
            info:
              "Travelling the road will tell you more about the road Enjoy it with beautiful story."
          },
          {
            icon: <FaCoffee />,
            title: "Strong coffee",
            info:
              "Good communication is just as stimulating as black coffee, and just as hard to sleep after."
          }
        ]
      };
    render() {
        return (
<section className="services">
        <Title title="Enjoy with" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
        )
    }
}

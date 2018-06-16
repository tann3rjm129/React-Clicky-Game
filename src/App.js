import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Thumbnails from "./components/Thumbnails";
import Footer from "./components/Footer";
import Characters from "./Characters";
import "./App.css";


let topScore = 0;
let currentScore = 0;

class App extends Component {

  state = {

    Characters,
    topScore,
    currentScore

  }

  setClicked = id => {

    const Characters = this.state.Characters;
    const cardClicked = Characters.filter(Character => Character.id === id);

    if (cardClicked[0].clicked) {

      currentScore = 0;

      for (let i = 0; i < Characters.length; i++) {
        Characters[i].clicked = false;
      }

      this.setState({ currentScore });
      this.setState({ topScore });
      this.setState({ Characters });
    }

    else {

      cardClicked[0].clicked = true;

      currentScore = currentScore + 1;

      if (currentScore > topScore) {

        topScore = currentScore;
        this.setState({ topScore });
      }

      Characters.sort((a, b) => {
        return 0.5 - Math.random();
      });

      this.setState({ Characters });
      this.setState({ currentScore });

    }

  }


  render() {
    return (

      <div className="background">

        <Navbar />
        <Jumbotron />
        <div className="row justify-content-center">
          <span class="badge badge-pill orange font bottom">Current Score: {currentScore}</span>
          <span class="badge badge-pill orange font left bottom">Top Score: {topScore} </span>
        </div>
        <div className="row">
          {this.state.Characters.map(Character => (
            <Thumbnails
              setClicked={this.setClicked}
              id={Character.id}
              key={Character.id}
              image={Character.image}
              name={Character.name}
            />
          ))}
        </div>
        <Footer />

      </div>

    );
  }

};

export default App;

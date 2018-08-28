import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: []
    }
  }

  getFilms() {
    axios.get("/v4/api/film/now-playing?__t=1530350168499&page=1&count=5")
      .then((res) => {

        console.log(res)
        this.setState({
          films: res.data.data.films
        })
      })
  }
  render() {
    return (
      <div className="App">

        <button onClick={this.getFilms.bind(this)}>获取数据</button>
        {
          this.state.films.map(function (item, index) {
            return (
              <div key={index}>
                <h3>{item.name}</h3>
                <img src={item.cover.origin} />
              </div>

            )

          })
        }

      </div>
    );
  }
}

export default App;

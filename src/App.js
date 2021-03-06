import React from 'react';
import './App.css';
import axios from 'axios'
import DisplayQuote from './components/DisplayQuote';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: [0]
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => { console.log(data) ||
        this.setState({
          simpson: data[0],
        });
    });
  }

  componentDidMount () {
    this.getQuote()
  }

  render() {
    
    return (
      <div className="App">
        <DisplayQuote simpson={this.state.simpson} />
        <button type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }
}

export default App;
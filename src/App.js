import React, { Component } from 'react';
import Quote from './Quote';
import Footer from './Footer';
import './App.css';



// TO DO : FADE ANIMATION




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: 'Lorem Ipsum',
      author: 'Lorem Ipsum'
    }

    this.escFunction = this.escFunction.bind(this);
  }

  setQuote() {
    fetch('https://talaikis.com/api/quotes/random/')
      .then(response => response.json())
      .then(data =>

        this.setState({
          quote: data.quote,
          author: data.author
        })
      );
  }

  escFunction(event) {
    if (event.keyCode === 32) {
      this.setQuote()
    }
  }
  componentDidMount() {
    this.setQuote()
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }
  render() {
    return (
      <div className="App-header">
        <Quote quote={this.state} />
        <Footer />
      </div >
    );
  }
}

export default App;

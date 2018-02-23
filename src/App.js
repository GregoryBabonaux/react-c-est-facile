import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      url: '',
      message: '',
    }

    this.test = this.test.bind(this)
  }

componentDidMount(){
    let _self = this;

    if( window.chrome ){  
      window.chrome.tabs.getSelected(null,function(tab) {
        let url = tab.url;
        _self.setState({
          url
        })
      });
    }
  }

  test(e){
    e.preventDefault();
    this.setState({
      message : `J'ai bien pris connaissance de votre lien et en fait, pour être tout à fait honnête, je m'en fous totalement :) Bisous ! `
    })
  }
  
  render() {
    let { url, message } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          L'url interceptée : {url}
          <button onClick={(e) => this.test(e)}>Enregistrer !</button>
        </p>

        <p style={{color: 'red'}}>
          {message}
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container" >
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

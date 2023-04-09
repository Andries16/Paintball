import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Section from './components/Section';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
     <div>
       <Header/>
       <Slider/>
       <Section>
          <Card/>
          <Card/>
          <Card/>
       </Section>
     </div>
    );
  }
}

export default App;

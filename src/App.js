import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import EventList from './Components/EventList/EventList';
import Color from './Components/Color/Color';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <EventList events={[{name:"Dancing Festival", location: "Gurgaon"}, 
                            {name:"Singing Festival", location: "Delhi"},
                            {name:"Painting Festival", location: "Noida"}]} /> */}
        <Color />                    
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MyNavBar from './components/MyNavBar'

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <MyNavBar />
         
        </div>
      </Router>
    )
  };
};

export default App;

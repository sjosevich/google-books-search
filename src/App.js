import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MyNavBar from './components/MyNavBar'
import MyHeader from './components/MyHeader';

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <MyNavBar />
          <MyHeader />
        </div>
      </Router>
    )
  };
};

export default App;

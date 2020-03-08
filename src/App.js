import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MyNavBar from './components/MyNavBar'
import MyHeader from './components/MyHeader';
import Wrapper from "./components/Wrapper";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <MyNavBar />
          <MyHeader />
          <Wrapper>
          <Route exact path="/"  />
          <Route exact path="/search"  />
          <Route exact path="/saved"  />
          <Route exact path="/noMatch"  />
        </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MyNavBar from './components/MyNavBar'
import MyHeader from './components/MyHeader';
import Wrapper from "./components/Wrapper";

import NoMatch from "./components/pages/NoMatch";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <MyNavBar />
          <MyHeader />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} />
        </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;

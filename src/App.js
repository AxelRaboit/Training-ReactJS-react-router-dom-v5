import React, { Component } from 'react';
import './App.css';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menu';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       underConstruction: {
         Docs: false,
         Tutorials: true,
         Community: false
       }
    }
  }
  

  render() {
    return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Docs} />
        <Route path="/tutorial" component={Tutorials} />
        <Route strict path="/community" component={Community} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;

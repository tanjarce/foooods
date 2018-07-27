import React, { Component } from 'react';
import {withRouter, Redirect} from 'react-router-dom'
import Navigation from './container/Navigation';
import Content from './container/Content';
import './App.css';

class App extends Component {
  render() {
    if(this.props.location.pathname === '/'){
      return <Redirect to="/catalog" />
    }
    return (
      <div className="App">
        <Navigation />
        <Content />
      </div>
    );
  }
}

export default withRouter(App);
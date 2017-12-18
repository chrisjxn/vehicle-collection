import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <Header />
          </div>
          <div>
            <Switch>
              <Route path='/' component={Home} exact />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import LoginSuccess from './components/loginSuccess/LoginSuccess';
import UserCollection from './components/userCollection/UserCollection';
import UserProfile from './components/userProfile/UserProfile';
import AddVehicle from './components/addVehicle/AddVehicle';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Header />
          </header>
          <div>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/collections/:userId' component={UserCollection} />
              <Route path='/profile/:userId' component={UserProfile} />
              <Route path='/login-success' component={LoginSuccess} />
              <Route path='/add-vehicle' component={AddVehicle} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import LoginSuccess from './components/loginSuccess/LoginSuccess';
import UserCollection from './components/userCollection/UserCollection';
import UserProfile from './components/userProfile/UserProfile';
import AddVehicle from './components/addVehicle/AddVehicle';
import ViewVehicle from './components/viewVehicle/ViewVehicle';
import EditVehicle from './components/editVehicle/EditVehicle';
import DeleteVehicle from './components/deleteVehicle/DeleteVehicle';

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
              <Route path='/login-success' component={LoginSuccess} />
              <Route path='/collections/:userId' component={UserCollection} />
              <Route path='/profiles/:userId' component={UserProfile} />
              <Route path='/vehicles/add' component={AddVehicle} />
              <Route path='/vehicles/edit/:vehicleId' component={EditVehicle} />
              <Route path='/vehicles/delete/:vehicleId' component={DeleteVehicle} />
              <Route path='/vehicles/:vehicleId' component={ViewVehicle} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

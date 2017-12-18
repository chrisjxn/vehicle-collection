import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserCollection.css';

class UserCollection extends Component {
    render() {
        return (
            <div className="userCollectionComponent">
                <div>This is the UserCollection Component</div>
                <Link className="addVehicleLink" to='/add-vehicle'>Add vehicle</Link>
            </div>
        )
    }
}

export default UserCollection;
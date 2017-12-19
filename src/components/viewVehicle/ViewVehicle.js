import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVehicle } from '../../redux/reducer';
import './ViewVehicle.css';

class ViewVehicle extends Component {
    componentDidMount() {
        const { vehicleId } = this.props.match.params;
        this.props.getVehicle(vehicleId);
    }

    render() {
        const { vehicle } = this.props;

        if (vehicle.length === 0) {
            return <div className="viewVehicleComponent"> Loading...</div>
        }

        return (
            <div className="viewVehicleComponent">
                <div>Vehicle Id: {vehicle[0].id}</div>
                <div>Type: {vehicle[0].type}</div>
                <div>Color: {vehicle[0].color}</div>
                <div>Description: {vehicle[0].description}</div>
                <div>Owner Name: {vehicle[0].owner_first} {vehicle[0].owner_last}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        vehicle: state.vehicle
    }
}

export default connect(mapStateToProps, { getVehicle })(ViewVehicle);

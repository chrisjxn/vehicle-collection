import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVehicle, deleteVehicle } from '../../redux/reducer';
import './DeleteVehicle.css';

class DeleteVehicle extends Component {
    componentDidMount() {
        const { vehicleId } = this.props.match.params;
        this.props.getVehicle(vehicleId);
    }

    onDeleteClick = () => {
        this.props.deleteVehicle(this.props.vehicle[0].id, () => {
            this.props.history.push(`/collections/${this.props.user.id}`)
        })
    }

    render() {
        const { vehicle } = this.props;

        if (vehicle.length === 0) {
            return <div className="viewVehicleComponent">Loading...</div>
        }

        return (
            <div className="deleteVehicleComponent">
                <div>Vehicle Id: {vehicle[0].id}</div>
                <div>Type: {vehicle[0].type}</div>
                <div>Color: {vehicle[0].color}</div>
                <div>Description: {vehicle[0].description}</div>
                <div>Owner Name: {vehicle[0].owner_first} {vehicle[0].owner_last}</div>
                <div>Are you sure you want to delete this vehicle?</div>
                <div>
                    <button onClick={this.onDeleteClick}>Yes</button>
                    <Link to={`/collections/${this.props.user.id}`}><button>No</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        vehicle: state.vehicle,
        user: state.user
    }
}

export default connect(mapStateToProps, { getVehicle, deleteVehicle })(DeleteVehicle);

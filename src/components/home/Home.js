import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVehicles } from '../../redux/reducer';
import VehicleListItem from './vehicleListItem/VehicleListItem';
import './Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.getVehicles();
    }

    renderVehicles() {
        return this.props.vehicles.map(vehicle => {
            return (
                <VehicleListItem key={vehicle.id} vehicle={vehicle} />
            )
        })
    }

    render() {
        return (
            <div className="homeComponent">
                <table>
                    <tbody>
                        <tr className="tableHeaders">
                            <td>Owner Name</td>
                            <td>Type</td>
                            <td>Color</td>
                            <td>Description</td>
                            <td>View</td>
                        </tr>
                        {this.renderVehicles()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        vehicles: state.vehicles
    }
}

export default connect(mapStateToProps, { getVehicles })(Home);

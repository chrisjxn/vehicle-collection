import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVehicle, updateVehicle } from '../../redux/reducer';
import './EditVehicle.css';

class EditVehicle extends Component {
    componentDidMount() {
        const { vehicleId } = this.props.match.params;
        this.props.getVehicle(vehicleId);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(this.props);
    //     console.log(nextProps);
    //     const { vehicleId } = this.props.match.params;
    //     if (this.props.vehicle[0].id !== nextProps.vehicle[0].id) {
    //         this.props.getVehicle(vehicleId)
    //     }
    // }

    onFormSubmit = event => {
        event.preventDefault();
        const updatedVehicle = {
            vehicleId: this.props.vehicle[0].id,
            type: this.refs.type.value,
            color: this.refs.color.value,
            description: this.refs.description.value
        };
        this.props.updateVehicle(this.props.vehicle[0].id, updatedVehicle, () => {
            this.props.history.push(`/collections/${this.props.user.id}`)
        });
    }

    onCancelClick = () => {
        console.log('Cancel button clicked')
    }

    render() {
        const { vehicle } = this.props;

        if (vehicle.length === 0) {
            return <div className="editVehicleComponent">Loading...</div>
        }

        return (
            <div className="editVehicleComponent">
                <form
                    className="vehicleForm"
                    onSubmit={this.onFormSubmit}>
                    <input
                        placeholder="Vehicle type"
                        className="formInput"
                        ref="type"
                        defaultValue={vehicle[0].type} />
                    <input
                        placeholder="Vehicle color"
                        className="formInput"
                        ref="color"
                        defaultValue={vehicle[0].color} />
                    <textarea
                        placeholder="Vehicle description"
                        className="formTextArea"
                        ref="description"
                        defaultValue={vehicle[0].description} />
                    <button type="submit">Save changes</button>
                    <Link to={`/collections/${this.props.user.id}`}><button>Cancel</button></Link>
                </form>
                <div>
                    <button onClick={this.onCancelClick}>Cancel</button>
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

export default connect(mapStateToProps, { getVehicle, updateVehicle })(EditVehicle);
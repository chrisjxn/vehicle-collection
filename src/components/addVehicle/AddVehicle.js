import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVehicle } from '../../redux/reducer';
import './AddVehicle.css';

class AddVehicle extends Component {
    onFormSubmit = event => {
        event.preventDefault();
        const newVehicle = {
            type: this.refs.type.value,
            color: this.refs.color.value,
            description: this.refs.description.value
        };
        this.props.addVehicle(newVehicle, () => {
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <div className="addVehicleComponent">
                <form
                    className="vehicleForm"
                    onSubmit={this.onFormSubmit}>
                    <input
                        placeholder="Vehicle type"
                        className="formInput"
                        ref="type" />
                    <input
                        placeholder="Vehicle color"
                        className="formInput"
                        ref="color" />
                    <textarea
                        placeholder="Vehicle description"
                        className="formTextArea"
                        ref="description" />
                    <button type="submit">Add vehicle to collection</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addVehicle })(AddVehicle);
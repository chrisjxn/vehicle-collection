import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            this.props.history.push(`/collections/${this.props.user.id}`);
        });
    }

    render() {
        console.log(this.props);
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
                    <Link to={`/collections/${this.props.user.id}`}><button>Cancel</button></Link>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addVehicle })(AddVehicle);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addVehicle } from '../../redux/reducer';
import './AddVehicle.css';

class AddVehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: '',
            color: '',
            description: ''
        }
    }

    handleFormElementChange = (event, vehicleAttribute) => {
        if (vehicleAttribute === 'type') this.setState({ type: event.target.value })
        if (vehicleAttribute === 'color') this.setState({ color: event.target.value })
        if (vehicleAttribute === 'description') this.setState({ description: event.target.value })
    }

    onFormSubmit = event => {
        event.preventDefault();
        const newVehicle = {
            type: this.state.type,
            color: this.state.color,
            description: this.state.description
        };
        this.props.addVehicle(newVehicle, () => {
            this.props.history.push(`/collections/${this.props.user.id}`)
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
                        onChange={event => this.handleFormElementChange(event, 'type')}
                        value={this.state.type} />
                    <input
                        placeholder="Vehicle color"
                        className="formInput"
                        onChange={event => this.handleFormElementChange(event, 'color')}
                        value={this.state.color} />
                    <textarea
                        placeholder="Vehicle description"
                        className="formTextArea"
                        onChange={event => this.handleFormElementChange(event, 'description')}
                        value={this.state.description} />
                    <button type="submit">Add vehicle to collection</button>
                </form>
                <div>
                    <Link to={`/collections/${this.props.user.id}`}><button>Cancel</button></Link>
                </div>
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
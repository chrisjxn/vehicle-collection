import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVehicle, updateVehicle } from '../../redux/reducer';
import './EditVehicle.css';

class EditVehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: '',
            color: '',
            description: ''
        }
    }

    componentDidMount() {
        const { vehicleId } = this.props.match.params;
        this.props.getVehicle(vehicleId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.vehicle.length === 0 && nextProps.vehicle.length !== 0) {
            this.populateFormElements(nextProps);
        }
    }

    populateFormElements = props => {
        if (props.vehicle.length === 0) return
        this.setState({
            type: props.vehicle[0].type,
            color: props.vehicle[0].color,
            description: props.vehicle[0].description
        })
    }

    handleFormElementChange = (e, vehicleAttribute) => {
        if (vehicleAttribute === 'type') this.setState({ type: e.target.value })
        if (vehicleAttribute === 'color') this.setState({ color: e.target.value })
        if (vehicleAttribute === 'description') this.setState({ description: e.target.value })
    }

    onFormSubmit = event => {
        event.preventDefault();
        const updatedVehicle = {
            vehicleId: this.props.vehicle[0].id,
            type: this.state.type,
            color: this.state.color,
            description: this.state.description
        };
        this.props.updateVehicle(this.props.vehicle[0].id, updatedVehicle, () => {
            this.props.history.push(`/collections/${this.props.user.id}`)
        });
    }

    render() {
        if (this.props.vehicle.length === 0) {
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
                    <button type="submit">Save changes</button>
                </form>
                <div>
                    <button onClick={() => this.populateFormElements(this.props)}>Cancel</button>
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
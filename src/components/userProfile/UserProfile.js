import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/reducer';
import './UserProfile.css';

class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            personal_url: ''
        }
    }

    componentDidMount() {
        this.populateUserInfo(this.props)
    }

    populateUserInfo = props => {
        this.setState({
            username: props.user.username || '',
            email: props.user.email || '',
            first_name: props.user.first_name || '',
            last_name: props.user.last_name || '',
            personal_url: props.user.personal_url || ''
        })
    }

    handleUserInfoChange = (event, userAttribute) => {
        if (userAttribute === 'username') this.setState({ username: event.target.value })
        if (userAttribute === 'email') this.setState({ email: event.target.value })
        if (userAttribute === 'first_name') this.setState({ first_name: event.target.value })
        if (userAttribute === 'last_name') this.setState({ last_name: event.target.value })
        if (userAttribute === 'personal_url') this.setState({ personal_url: event.target.value })
    }

    onFormSubmit = event => {
        event.preventDefault();
        const updatedUser = {
            userId: this.props.user.id,
            username: this.state.username,
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            personal_url: this.state.personal_url,
        };
        this.props.updateUser(this.props.user.id, updatedUser);
    }

    render() {
        return (
            <div className="userProfileComponent">
                <form
                    className="userForm"
                    onSubmit={this.onFormSubmit}>
                    <input
                        placeholder="User username"
                        className="formInput"
                        onChange={event => this.handleUserInfoChange(event, 'username')}
                        value={this.state.username} />
                    <input
                        placeholder="User email"
                        className="formInput"
                        onChange={event => this.handleUserInfoChange(event, 'email')}
                        value={this.state.email} />
                    <input
                        placeholder="User first_name"
                        className="formInput"
                        onChange={event => this.handleUserInfoChange(event, 'first_name')}
                        value={this.state.first_name} />
                    <input
                        placeholder="User last_name"
                        className="formInput"
                        onChange={event => this.handleUserInfoChange(event, 'last_name')}
                        value={this.state.last_name} />
                    <input
                        placeholder="User personal_url"
                        className="formInput"
                        onChange={event => this.handleUserInfoChange(event, 'personal_url')}
                        value={this.state.personal_url} />
                    <button type="submit">Save changes</button>
                </form>
                <div>
                    <button onClick={() => this.populateUserInfo(this.props)}>Cancel</button>
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

export default connect(mapStateToProps, { updateUser })(UserProfile);
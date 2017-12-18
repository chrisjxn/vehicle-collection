import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/reducer';

class LoginSuccess extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    }

    componentWillReceiveProps(nextProps) {
        this.props.history.replace('/');
    }

    render() {
        return (
            <div>Login success! Redirecting...</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(LoginSuccess);
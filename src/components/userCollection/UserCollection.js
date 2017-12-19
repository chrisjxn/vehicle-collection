import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserCollection } from '../../redux/reducer';
import CollectionListItem from './collectionListItem/CollectionListItem';
import './UserCollection.css';

class UserCollection extends Component {
    componentDidMount() {
        const { userId } = this.props.match.params
        this.props.getUserCollection(userId);
    }

    renderUserCollection() {
        return this.props.userCollection.map(vehicle => {
            return (
                <CollectionListItem key={vehicle.id} vehicle={vehicle} />
            )
        })
    }

    render() {
        const { userCollection } = this.props;

        if (userCollection.length === 0) {
            return <div className="userCollectionComponent">Loading...</div>
        }

        return (
            <div className="userCollectionComponent">
                <table>
                    <tbody>
                        <tr className="tableHeaders">
                            <td>Owner Name</td>
                            <td>Type</td>
                            <td>Color</td>
                            <td>Description</td>
                            <td>View</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                        {this.renderUserCollection()}
                    </tbody>
                </table>
                <div>
                    <Link className="addVehicleLink" to='/vehicles/add'><button>Add vehicle</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userCollection: state.userCollection
    }
}

export default connect(mapStateToProps, { getUserCollection })(UserCollection);
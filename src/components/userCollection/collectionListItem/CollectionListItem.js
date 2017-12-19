import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionListItem.css';

export default function CollectionListItem(props) {
    return (
        <tr>
            <td>{props.vehicle.owner_first} {props.vehicle.owner_last}</td>
            <td>{props.vehicle.type}</td>
            <td>{props.vehicle.color}</td>
            <td>{props.vehicle.description}</td>
            <td><Link className="collectionTableData" to={`/vehicles/${props.vehicle.id}`}>View</Link></td>
            <td><Link className="collectionTableData" to={`/vehicles/edit/${props.vehicle.id}`}>Edit</Link></td>
            <td><Link className="collectionTableData" to={`/vehicles/delete/${props.vehicle.id}`}>Delete</Link></td>
        </tr>
    )
}
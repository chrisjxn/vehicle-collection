import React from 'react';
import { Link } from 'react-router-dom';
import './VehicleListItem.css';

export default function VehicleListItem(props) {
    return (
        <tr>
            <td>{props.vehicle.owner_first} {props.vehicle.owner_last}</td>
            <td>{props.vehicle.type}</td>
            <td>{props.vehicle.color}</td>
            <td>{props.vehicle.description}</td>
            <td><Link className="vehicleTableData" to={`/vehicles/${props.vehicle.id}`}>View</Link></td>
        </tr>
    )
}
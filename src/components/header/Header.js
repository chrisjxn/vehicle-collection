import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className="headerComponent">
            <div className="leftNav">
                <Link to='/'>Home</Link>
            </div>
            <div className="rightNav">
                <div>Placeholder for right nav elements</div>
            </div>
        </div>
    )
}
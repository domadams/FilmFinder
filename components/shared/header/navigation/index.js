import React from 'react';
import { Link } from 'react-router'
import './navigation.scss';

const Navigation = () => {
    return (
        <nav className="navigation--wrapper">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
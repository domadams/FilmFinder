import React from 'react';
import { Link } from 'react-router'
import './logo.scss';

const Logo = () => {
    return (
        <div className="logo--wrapper">
            <Link to="/">
                <span className="logo"/>
            </Link>
        </div>
    );
};

export default Logo;
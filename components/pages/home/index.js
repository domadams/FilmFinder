import React, { Component } from 'react';
import { Link } from 'react-router'
import './home.scss';

class Home extends Component {
    render() {
        return (
            <div className="home-component">
                <Link to="about">About</Link>
            </div>
        );
    }
}

export default Home;
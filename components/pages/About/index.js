import React, { Component } from 'react';
import { Link } from 'react-router'
import './about.scss';

class About extends Component {
    render() {
        return (
            <div className="about-component">
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default About;
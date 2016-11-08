import React, { Component, PropTypes } from 'react';

export default class FilmCard extends Component {
    static propTypes = {
        filmDetails: PropTypes.shape({
            title: PropTypes.string
        })
    };

    render(){
        return(
            <div>
                <h3>{this.props.filmDetails.title}</h3>
            </div>
        )
    }
}
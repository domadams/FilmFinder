import React, { Component, PropTypes } from 'react';
import FilmCard from '../film-card';

export default class FilmListItem extends Component {
    static propTypes = {
        filmDetails: PropTypes.shape({
            title: PropTypes.string
        })
    };

    render(){
        return (
            <li>
                <FilmCard filmDetails={this.props.filmDetails} />
            </li>
        )
    }
}

import React, { Component, PropTypes } from 'react';
import FilmListItem from '../film-list-item';

export default class FilmList extends Component {
    static propTypes = {
      films: PropTypes.array
    };

    renderFilmList(){
        this.props.films.map((film, index) => {
            return <FilmListItem key={index} filmDetails={film}/>
        });
    }

    render(){
        return (
            <ul>
                {this.renderFilmList()}
            </ul>
        )
    }
}

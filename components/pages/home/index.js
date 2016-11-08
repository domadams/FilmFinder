import React, { Component } from 'react';
import FilmList from './film-list';
import getNowPlayingMovies from '../../../lib/requests/getNowPlayingMovies';
import './home.scss';

class Home extends Component {
    render() {
        const films = getNowPlayingMovies();
        console.log(films);
        return (
            <div className="home--component">
                <h2>Welcome to Film Finder</h2>
                <p>
                    Home Page Content
                </p>
                {films
                    ? <FilmList films={films}/>
                    : null
                }
            </div>
        );
    }
}

export default Home;
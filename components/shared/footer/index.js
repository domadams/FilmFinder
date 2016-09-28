import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer--wrapper row col">
            <span className="footer--copyright">
                Copyright 2016 | FilmFinder.com | Built by: <a href="http://www.dominic-adams.com" title="Dominic Adams">Dominic Adams</a>
            </span>
        </footer>
    );
};

export default Footer;
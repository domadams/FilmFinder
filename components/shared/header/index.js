import React from 'react';
import Logo from './logo';
import Navigation from './navigation';
import './header.scss';

const Header = () => {
    return (
        <header className="header--wrapper row">
            <div className="header--content-wrapper">
                <div className="col span-2-of-8">
                    <Logo/>
                </div>
                <div className="col span-6-of-8">
                    <Navigation/>
                </div>
            </div>
        </header>
    );
};

export default Header;
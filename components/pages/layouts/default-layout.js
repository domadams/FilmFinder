import React, { Component } from 'react';
import Header from '../../shared/header';
import Footer from '../../shared/footer';
import './default-layout.scss';

class DefaultLayout extends Component {
    render() {
        return (
            <div className="content--wrapper">
                <Header/>
                <div className="page-content row col">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}

DefaultLayout.propTypes = {
    children: React.PropTypes.any.isRequired
};

export default DefaultLayout;
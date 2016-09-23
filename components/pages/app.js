import React, { PropTypes, Component } from 'react';
import './app.scss';

class App extends Component {
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <div className="app-wrapper">
                <div className="row">
                    {/* Render Main Content */}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
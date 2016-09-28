import React, { PropTypes, Component } from 'react';
import DefaultLayout from './layouts/default-layout';

class App extends Component {
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <DefaultLayout>
                {/* Render Main Content */}
                {this.props.children}
            </DefaultLayout>
        );
    }
}

export default App;
import React from 'react';

import Header from '../../components/Header/Header';

class HomePage extends React.PureComponent {
    render() {
        return (
            <div>
                <Header text="Technical interview: Movie Gallery" />
            </div>
        );
    }
}

export default HomePage;
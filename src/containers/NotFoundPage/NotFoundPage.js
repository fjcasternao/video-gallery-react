import React from 'react';

import Header from '../../components/Header/Header';

class NotFoundPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Header text="Technical interview: Movie Gallery" />
                <div>
                    Not Found Page
                </div>
            </div>
        );
    }
}

export default NotFoundPage;
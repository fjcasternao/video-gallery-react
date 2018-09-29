import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'

const MOUNT_NODE = document.getElementById('root');


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), MOUNT_NODE);
registerServiceWorker();

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PimpedMenu from '../src/containers/pimpedmenu';
import reducers from './reducers/root';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <PimpedMenu />
    </Provider>,
    document.getElementById("container")
);
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import services from './services';
import store from './store';
import View from './view';

/*
 * onload
 *   call the rest service for instruments
 *   start listening to the websocket channel for messages
 *   render the view
 */

window.addEventListener('load', function () {
    services.rest.get_instruments();
    services.websocket.connect();
    const prototype = <Provider store={store}><View/></Provider>;
    const root = document.getElementById('root');
    ReactDOM.render(prototype, root);
});

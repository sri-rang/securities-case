import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import api from './api';
import actions from './actions';
import store from './store';
import View from './view';

window.addEventListener('load', function () {
    api.get_instruments().then(instruments => {
        store.dispatch(actions.creator.get_instruments(instruments));
    });
    const prototype = <Provider store={store}><View/></Provider>;
    const root = document.getElementById('root');
    ReactDOM.render(prototype, root);
});

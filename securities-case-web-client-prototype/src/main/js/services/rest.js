import store from '../store';
import actions from '../actions';

const rest = {};

const headers = {'Content-Type': 'application/json'};

rest.get_instruments = () => {
    return fetch('/instruments', headers)
        .then(res => res.json())
        .then(instruments => {
            store.dispatch(actions.creator.get_instruments(instruments));
        });
};

export default rest;

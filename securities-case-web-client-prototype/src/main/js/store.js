import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import actions from './actions';

const filter_actions_default_state = {instruments: [], selected: null};
const filter_actions = (state = filter_actions_default_state, action) => {
    if (action.type === actions.list.get_instruments) {
        state = Object.assign({}, state, {instruments: action.instruments});
    }
    else if (action.type === actions.list.select_instrument) {
        state = Object.assign({}, state, {selected: action.code});
    }
    return state;
};

const messages = (state = {}, action) => {
    return state;
};

const reducer = combineReducers({filter_actions, messages});

const store = createStore(reducer, applyMiddleware(thunk, promise, createLogger()));

export default store;

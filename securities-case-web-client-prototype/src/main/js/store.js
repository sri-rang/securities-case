import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import actions from './actions';

const filter_actions_default_state = {instruments: [], selected: null};
const filter_actions = (state = filter_actions_default_state, action) => {
    if (action.type === actions.types.get_instruments) {
        return Object.assign({}, state, {instruments: [{code: null}, ...action.instruments]});
    }
    else if (action.type === actions.types.select_instrument) {
        return Object.assign({}, state, {selected: action.code});
    }
    else {
        return state;
    }
};

const messages_default_state = {messages: [], selected: null};
const messages = (state = messages_default_state, action) => {
    if (action.type === actions.types.get_message) {
        const messages = [action.message, ...state.messages];
        return Object.assign({}, state, {messages});
    }
    else if (action.type === actions.types.select_instrument) {
        return Object.assign({}, state, {selected: action.code});
    }
    else {
        return state;
    }
};

const reducer = combineReducers({filter_actions, messages});

const store = createStore(reducer, applyMiddleware(thunk, promise, createLogger()));

export default store;

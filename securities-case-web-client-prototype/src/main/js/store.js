import {createStore, combineReducers} from 'redux';
import filter_instruments from './reducers/filter_instruments';
import messages from './reducers/messages';

const reducer = combineReducers({filter_instruments, messages});

export default createStore(reducer);

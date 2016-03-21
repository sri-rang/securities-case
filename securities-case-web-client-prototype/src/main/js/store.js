import {createStore, combineReducers} from 'redux';
import filter_instruments from './reducers/filter_instruments';
import messages from './reducers/messages';

/*
 * the store is the heart / core of the application, it represents:
 *   an event store
 *   state tree
 *
 * how it works:
 *   the app dispatches actions
 *     for eg. get instruments from api, websocket push message, user applies a filter etc.
 *   reducer is called when an action is dispatched
 *     reducer is a pure function that takes in the old_state and action, and returns a new state
 *     (old_state, action) => new_state
 *     for complex UIs there can be state trees with multiple reducers
 *   states are immutable
 *     reducers must never modify old_state
 *     reducers are pure functions i.e. easily testable
 */

const reducer = combineReducers({filter_instruments, messages});

export default createStore(reducer);

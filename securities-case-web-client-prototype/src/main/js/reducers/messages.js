import actions from '../actions';

/*
 * reducer for the filter instruments sidebar component
 *   `default_state` contains no message and null as selected
 *
 * reducer responds to the following actions
 *   get_message
 *   select_instrument
 *
 * get_message
 *   is dispatched by the websocket client when server pushes a message
 *   reducer prepends message to the state's list of messages
 *
 * select_instrument
 *   is dispatched by the view when the user selects instrument from the sidebar
 *   reducer sets the selected instrument code
 */

const default_state = {messages: [], selected: null};

const reducer = (state = default_state, action) => {
    switch (action.type) {
        case actions.types.get_message:
            const messages = [action.message, ...state.messages];
            return Object.assign({}, state, {messages});
        case actions.types.select_instrument:
            return Object.assign({}, state, {selected: action.code});
        default:
            return state;
    }
};

export default reducer;

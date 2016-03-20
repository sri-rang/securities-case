import actions from '../actions';

const default_state = {messages: [], selected: null};

const reducer = (state = default_state, action) => {
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

export default reducer;

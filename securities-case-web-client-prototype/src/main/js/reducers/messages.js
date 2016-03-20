import actions from '../actions';

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

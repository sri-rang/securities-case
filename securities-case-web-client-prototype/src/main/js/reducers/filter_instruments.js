import actions from '../actions';

const default_state = {instruments: [], selected: null};

const reducer = (state = default_state, action) => {
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

export default reducer;

import actions from '../actions';

const default_state = {instruments: [], selected: null};

const reducer = (state = default_state, action) => {
    switch (action.type) {
        case actions.types.get_instruments:
            return Object.assign({}, state, {instruments: [{code: null}, ...action.instruments]});
        case actions.types.select_instrument:
            return Object.assign({}, state, {selected: action.code});
        default:
            return state;
    }
};

export default reducer;

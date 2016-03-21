import actions from '../actions';

/*
 * reducer for the filter instruments sidebar component
 *   `default_state` contains no instrument and null as selected
 *
 * reducer responds to the following actions
 *   get_instruments
 *   select_instrument
 *
 * get_instruments
 *   is dispatched by the rest service client when it gets the response with instruments
 *   reducer adds instruments to the state
 *   first instrument is a `null` instrument to allow deselection of instruments from the sidebar
 *
 * select_instrument
 *   is dispatched by the view when the user selects instrument from the sidebar
 *   reducer sets the selected instrument code
 */

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

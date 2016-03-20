import types from './types';

const creator = {};

creator.get_instruments = instruments => {
    return {
        type: types.get_instruments,
        instruments
    }
};

creator.select_instrument = code => {
    return {
        type: types.select_instrument,
        code
    };
};

creator.get_message = message => {
    return {
        type: types.get_message,
        message
    };
};

export default creator;

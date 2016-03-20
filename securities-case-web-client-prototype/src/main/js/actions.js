const actions = {};

actions.types = {};

actions.types.get_instruments = 'get instruments';

actions.types.select_instrument = 'select instrument';

actions.types.get_message = 'get message';

actions.creator = {};

actions.creator.get_instruments = instruments => {
    return {
        type: actions.types.get_instruments,
        instruments
    }
};

actions.creator.select_instrument = code => {
    return {
        type: actions.types.select_instrument,
        code
    };
};

actions.creator.get_message = message => {
    return {
        type: actions.types.get_message,
        message
    };
};

export default actions;

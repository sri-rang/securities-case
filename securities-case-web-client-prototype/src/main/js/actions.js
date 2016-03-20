const actions = {};

actions.list = {};

actions.list.get_instruments = 'action get instruments';

actions.list.select_instrument = 'action select instrument';

actions.creator = {};

actions.creator.get_instruments = instruments => {
    return {
        type: actions.list.get_instruments,
        instruments
    }
};

actions.creator.select_instrument = code => {
    return {
        type: actions.list.select_instrument,
        code
    };
};

export default actions;

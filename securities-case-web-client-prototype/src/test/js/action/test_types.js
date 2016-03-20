/* global describe, it */

import types from '../../../main/js/actions/types';

describe('Types', () => {
    it('get instrument', () => {
        expect(types.get_instruments).toEqual('get_instruments');
    });
    it('select_instrument', () => {
        expect(types.select_instrument).toEqual('select_instrument');
    });
    it('get_message', () => {
        expect(types.get_message).toEqual('get_message');
    });
});

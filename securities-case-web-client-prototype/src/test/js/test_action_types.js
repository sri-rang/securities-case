/* global describe, it */

import expect from 'expect';
import types from '../../main/js/actions/types';

describe('Types', () => {
    it('get instrument', () => {
        expect(types.get_instruments).toBe('get_instruments');
    });
    it('select_instrument', () => {
        expect(types.select_instrument).toBe('select_instrument');
    });
    it('get_message', () => {
        expect(types.get_message).toBe('get_message');
    });
});

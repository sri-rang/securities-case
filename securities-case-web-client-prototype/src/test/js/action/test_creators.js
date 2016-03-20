/* global describe, it */

import types from '../../../main/js/actions/types';
import creators from '../../../main/js/actions/creators';

describe('Action', () => {
    describe('for get instruments', () => {
        const action = creators.get_instruments([1, 2]);
        it('should exist', () => {
            expect(action).toBeDefined();
        });
        it('should be of the correct type', () => {
            expect(action.type).toEqual(types.get_instruments);
        });
        it('should have instruments', () => {
            expect(action.instruments.length).toEqual(2);
        });
    });
    describe('for select instrument', () => {
        const action = creators.select_instrument('foo bar');
        it('should exist', () => {
            expect(action).toBeDefined();
        });
        it('should be of the correct type', () => {
            expect(action.type).toEqual(types.select_instrument);
        });
        it('should have code', () => {
            expect(action.code).toEqual('foo bar');
        });
    });
    describe('for get message', () => {
        const action = creators.get_message('hello world');
        it('should exist', () => {
            expect(action).toBeDefined();
        });
        it('should be of the correct type', () => {
            expect(action.type).toEqual(types.get_message);
        });
        it('should have message', () => {
            expect(action.message).toEqual('hello world');
        });
    });
});

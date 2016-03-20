/* global describe, it */

import expect from 'expect';
import types from '../../../main/js/actions/types';
import creators from '../../../main/js/actions/creators';

describe('Action', () => {
    describe('for get instruments', () => {
        const action = creators.get_instruments([1, 2]);
        it('should exist', () => {
            expect(action).toExist();
        });
        it('should be of the correct type', () => {
            expect(action.type).toBe(types.get_instruments);
        });
        it('should have instruments', () => {
            expect(action.instruments.length).toBe(2);
        });
    });
    describe('for select instrument', () => {
        const action = creators.select_instrument('foo bar');
        it('should exist', () => {
            expect(action).toExist();
        });
        it('should be of the correct type', () => {
            expect(action.type).toBe(types.select_instrument);
        });
        it('should have code', () => {
            expect(action.code).toBe('foo bar');
        });
    });
    describe('for get message', () => {
        const action = creators.get_message('hello world');
        it('should exist', () => {
            expect(action).toExist();
        });
        it('should be of the correct type', () => {
            expect(action.type).toBe(types.get_message);
        });
        it('should have message', () => {
            expect(action.message).toBe('hello world');
        });
    });
});

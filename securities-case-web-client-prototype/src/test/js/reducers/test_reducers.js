/* global describe, it */

import expect from 'expect';
import actions from '../../../main/js/actions';
import filter_instruments from '../../../main/js/reducers/filter_instruments';
import messages from '../../../main/js/reducers/messages';

describe('Reducer', () => {
    describe('of filter instruments', () => {
        describe('for unknown action', () => {
            const state = filter_instruments(undefined, {type: 'blah action'});
            it('state should exist', () => {
                expect(state).toExist();
            });
            it('state should have 0 instruments', () => {
                expect(state.instruments).toExist();
                expect(state.instruments.length).toBe(0);
            });
            it('state should have null selected', () => {
                expect(state.selected).toBe(null);
            });
        });
        describe('for get instruments', () => {
            const action = actions.creator.get_instruments([1, 2, 3]);
            const state = filter_instruments(undefined, action);
            it('state should exist', () => {
                expect(state).toExist();
            });
            it('state should have 4 instruments', () => {
                expect(state.instruments.length).toBe(4);
            });
            it('state\s first instrument should have code null', () => {
                expect(state.instruments[0].code).toBe(null);
            });
        });
        describe('for select instrument', () => {
            const action = actions.creator.select_instrument('hello world');
            const state = filter_instruments(undefined, action);
            it('state should exist', () => {
                expect(state).toExist();
            });
            it('state should have correct selected instrument', () => {
                expect(state.selected).toBe('hello world');
            });
        });
    });
    describe('of messages', () => {
        describe('for unknown action', () => {
            const state = messages(undefined, {type: 'blah action'});
            it('state should exist', () => {
                expect(state).toExist();
            });
            it('state should have 0 messages', () => {
                expect(state.messages).toExist();
                expect(state.messages.length).toBe(0);
            });
            it('state should have null selected', () => {
                expect(state.selected).toBe(null);
            });
        });
        describe('for get messages', () => {
            const action = actions.creator.get_message(1);
            const state = messages(undefined, action);
            it('state should exist', () => {
                expect(state).toExist();
            });
            it('state should have 1 messages', () => {
                expect(state.messages.length).toBe(1);
            });
            const action_2 = actions.creator.get_message(2);
            const state_2 = messages(state, action_2);
            it('state should prepend messages', () => {
                expect(state_2.messages[0]).toBe(2);
            });
        });
        describe('for select instrument', () => {
            const action = actions.creator.select_instrument('hello world');
            const state = messages(undefined, action);
            it('state should exist', () => {
                expect(state).toExist();
            });
            it('state should have correct selected instrument', () => {
                expect(state.selected).toBe('hello world');
            });
        });
    });
});

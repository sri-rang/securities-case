/* global describe, it */

import expect from 'expect';
import actions from '../../main/js/actions';
import store from '../../main/js/store';

describe('Store', () => {
    it('exists', () => {
        expect(store).toExist();
    });
    describe('default state', () => {
        const state = store.getState();
        it('exists', () => {
            expect(state).toExist();
        });
        describe('for filter instruments', () => {
            it('exists', () => {
                expect(state.filter_instruments).toExist();
            });
            it('contains 0 instruments', () => {
                expect(state.filter_instruments.instruments.length).toBe(0);
            });
            it('has null selected', () => {
                expect(state.filter_instruments.selected).toBe(null);
            });
        });
        describe('for messages', () => {
            it('exists', () => {
                expect(state.messages).toExist();
            });
            it('contains 0 messages', () => {
                expect(state.messages.messages.length).toBe(0);
            });
            it('has null selected', () => {
                expect(state.messages.selected).toBe(null);
            });
        });
    });
    describe('state after get_instruments action', () => {
        const action = actions.creator.get_instruments([1,2,3]);
        store.dispatch(action);
        const state = store.getState();
        describe('for filter instruments', () => {
            it('contains 4 instruments', () => {
                expect(state.filter_instruments.instruments.length).toBe(4);
            });
            it('first instrument is null', () => {
                expect(state.filter_instruments.instruments[0].code).toBe(null);
            });
        });
    });
    describe('state after get_message action', () => {
        const action = actions.creator.get_message(1);
        store.dispatch(action);
        const state = store.getState();
        describe('for messages', () => {
            it('contains 1 messages', () => {
                expect(state.messages.messages.length).toBe(1);
            });
        });
    });
    describe('state after another get_message action', () => {
        const action = actions.creator.get_message(2);
        store.dispatch(action);
        const state = store.getState();
        describe('for messages', () => {
            it('contains 2 messages', () => {
                expect(state.messages.messages.length).toBe(2);
            });
            it('message should be prepended', () => {
                expect(state.messages.messages[0]).toBe(2);
            });
        });
    });
    describe('state after select_instrument action', () => {
        const action = actions.creator.select_instrument(9);
        store.dispatch(action);
        const state = store.getState();
        describe('for filter instruments', () => {
            it('has 9 selected', () => {
                expect(state.filter_instruments.selected).toBe(9);
            });
        });
        describe('for messages', () => {
            it('has 9 selected', () => {
                expect(state.messages.selected).toBe(9);
            });
        });
    });
});

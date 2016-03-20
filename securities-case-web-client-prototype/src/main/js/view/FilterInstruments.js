import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions';
import store from '../store';

const Link = ({code, selected, on_click}) => {
    if (code === selected) {
        return <span className='link selected'>{code}</span>;
    }
    else {
        return <a className='link' onClick={on_click}>{code}</a>;
    }
};

const FilterInstruments = props => {
    const links = props.instruments.map(i => {
        const on_click = () => {
            store.dispatch(actions.creator.select_instrument(i.code));
        };
        return <Link key={i.code} code={i.code} selected={props.selected} on_click={on_click}/>;
    });
    return <div id='FilterInstruments'>{links}</div>;
};

const state_to_props = state => {
    return state.filter_actions;
};

export default connect(state_to_props)(FilterInstruments);

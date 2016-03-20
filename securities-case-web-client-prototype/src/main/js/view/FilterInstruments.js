import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions';
import store from '../store';

const Link = ({code, selected, on_click}) => {
    const label = code || 'all';
    const classes = code === selected ? 'link selected' : 'link';
    return <a className={classes}
              onClick={on_click}>{label}</a>;
};

const FilterInstruments = props => {
    const links = props.instruments.map(i => {
        const on_click = () => {
            store.dispatch(actions.creator.select_instrument(i.code));
        };
        return <Link key={i.code}
                     code={i.code}
                     selected={props.selected}
                     on_click={on_click}/>;
    });
    return <div id='FilterInstruments'
                className='cell'>{links}</div>;
};

const state_to_props = state => state.filter_instruments;

export default connect(state_to_props)(FilterInstruments);

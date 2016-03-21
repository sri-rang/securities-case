import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions';
import store from '../store';

/*
 * React components below are implemented as pure function
 * Same components could be defined as classes, example:
 *
 *   class Link extends React.Component {
 *       render() {
 *           return <div>hello world</div>;
 *       }
 *   }
 *
 * But I prefer to write them as pure functions if they don't have any internal state
 *   React 14 allows this
 *   Pure functions are more concise and should be easier to test
 */

/**
 * Link component
 *
 * @param code
 * @param selected
 * @param on_click
 * @returns {XML}
 * @constructor
 */
const Link = ({code, selected, on_click}) => {
    const label = code || 'all';
    const classes = code === selected ? 'link selected' : 'link';
    return <a className={classes}
              onClick={on_click}>{label}</a>;
};

/**
 * FilterInstruments component
 *      This is the sidebar containing Links
 *      User can click a link and filter messages by instruments
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
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

/**
 * maps the store's default state into props for FilterInstruments component
 * @param state
 */
const state_to_props = state => state.filter_instruments;

export default connect(state_to_props)(FilterInstruments);

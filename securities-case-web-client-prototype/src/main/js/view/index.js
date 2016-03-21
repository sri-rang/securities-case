import React from 'react';
import FilterInstruments from './FilterInstruments';
import Messages from './Messages';

/*
 * React components below are implemented as pure function
 * Same components could be defined  classes, example:
 *
 *   class View extends React.Component {
 *       render() {
 *           return <div>hello world</div>;
 *       }
 *   }
 *
 * But I prefer to write them as pure functions if they don't have internal state
 *   React 14 allows this
 *   Pure functions are more concise and should be easier to test
 */

/**
 * Top level `View` component containing FilterInstruments and Messages
 *
 * @returns {XML}
 * @constructor
 */
const View = () => {
    return <div className='row'>
        <FilterInstruments/>
        <Messages/>
    </div>;
};

export default View;

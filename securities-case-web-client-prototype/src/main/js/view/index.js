import React from 'react';
import FilterInstruments from './FilterInstruments';
import Messages from './Messages';

const View = () => {
    return <div className='row'>
        <FilterInstruments/>
        <Messages/>
    </div>;
};

export default View;

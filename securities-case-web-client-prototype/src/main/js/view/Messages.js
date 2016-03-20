import React from 'react';
import {connect} from 'react-redux';

const Messages = props => {
    return <div>messages</div>;
};

const state_to_props = state => {
    return state.messages;
};

export default connect(state_to_props)(Messages);

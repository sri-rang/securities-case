import React from 'react';
import {connect} from 'react-redux';

const Message = ({code, amount, when}) => {
    const date = new Date(when).toDateString();
    return <li>{code} {amount} {date}</li>;
};

const Messages = props => {
    let filtered;
    if (props.selected) {
        filtered = props.messages.filter(m => m.code === props.selected);
    }
    else {
        filtered = props.messages;
    }
    const messages = filtered.map(m => {
        return <Message key={m.code + '-' + m.price.amount + + m.price.when}
                        code={m.code}
                        amount={m.price.amount}
                        when={m.price.when}/>
    });
    return <ul>{messages}</ul>;
};

const state_to_props = state => {
    return state.messages;
};

export default connect(state_to_props)(Messages);

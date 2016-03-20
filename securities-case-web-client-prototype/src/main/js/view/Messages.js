import React from 'react';
import {connect} from 'react-redux';

const Message = ({code, amount, when}) => {
    const date = new Date(when).toLocaleTimeString();
    return <div className='Message row'>
        <div className='Date cell'>{date}</div>
        <div className='Code cell'>{code}</div>
        <div className='Amount cell'>{amount.toFixed(2)}</div>
    </div>;
};

const Messages = props => {
    let filtered = props.messages.filter(m => props.selected ? m.code === props.selected : true);
    const messages = filtered.map(m => {
        return <Message key={m.code + '-' + m.price.amount + + m.price.when}
                        code={m.code}
                        amount={m.price.amount}
                        when={m.price.when}/>
    });
    return <div id='Messages' className='cell'>{messages}</div>;
};

const state_to_props = state => state.messages;

export default connect(state_to_props)(Messages);

import React from 'react';
import {connect} from 'react-redux';

/*
 * React components below are implemented as pure function
 * Same components could also be written with classes, example:
 *
 *   class Message extends React.Component {
 *       render() {
 *           return <div>hello world</div>;
 *       }
 *   }
 *
 * But I prefer to write them as pure functions if they don't have any internal
 *   React 14 allows this
 *   Pure functions are more concise and should be easier to test
 */

/**
 * Message component
 *      implements UI for a single message
 *
 * @param code
 * @param amount
 * @param when
 * @returns {XML}
 * @constructor
 */
const Message = ({code, amount, when}) => {
    const date = new Date(when).toLocaleTimeString();
    return <div className='Message row'>
        <div className='Date cell'>{date}</div>
        <div className='Code cell'>{code}</div>
        <div className='Amount cell'>{amount.toFixed(2)}</div>
    </div>;
};

/**
 * Message component
 *      UI for (an optionally filtered) list of messages
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
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

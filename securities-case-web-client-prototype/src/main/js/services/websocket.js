/* global SockJS, Stomp */

import store from '../store';
import actions from '../actions';

/*
 * websocket client
 *   uses SockJS and Stomp as in the original example
 *   dispatches `get_message` on server push
 */

const websocket = {};

websocket.connect = () => {
    const socket = new SockJS('/stomp');
    const client = Stomp.over(socket);
    client.connect({}, () => {
        client.subscribe('/topic/update', message => {
            const body = JSON.parse(message.body);
            store.dispatch(actions.creator.get_message(body));
        });
    });
};

export default websocket;

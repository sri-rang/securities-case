/* global SockJS, Stomp */

import store from '../store';
import actions from '../actions';

const websocket = {};

websocket.connect = () => {
    const socket = new SockJS('/stomp');
    const client = Stomp.over(socket);
    client.connect({}, () => {
        client.subscribe('/topic/update', message => {
            const body = JSON.parse(message.body);
            if (body) {
                store.dispatch(actions.creator.get_message(body));
            }
        });
    });
};


export default websocket;

/* global SockJS, Stomp */

import actions from './actions';
import store from './store';

const push = {};

push.connect = () => {
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

export default push;

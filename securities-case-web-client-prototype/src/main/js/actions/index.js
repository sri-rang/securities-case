import types from './types';
import creator from './creators';

/*
 * types is the list of all possible actions that can occur in this app
 *   get_instruments from rest server
 *   get message from websocket channel
 *   and filter_instrument when user filters messages by instrument
 *
 * creator is a helper to create action objects
 */

export default {types, creator};

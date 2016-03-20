import 'whatwg-fetch';

const api = {};

const headers = {'Content-Type': 'application/json'};

api.get_instruments = () => {
    return fetch('/instruments', headers).then(res => res.json());
};

export default api;

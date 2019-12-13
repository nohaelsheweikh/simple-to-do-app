import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import history from './utils/history';
import * as serviceWorker from './serviceWorker';

import App from './App';
import configureStore from './store/configureStore';
import { setCurrentUser } from './actions/authActions';
import jwt from 'jsonwebtoken'
import reducers from './reducers/index'


const store = configureStore(reducers,history);
console.log('localStorage',localStorage.jwtToken)
if(localStorage.jwtToken){

    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))

}
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
serviceWorker.unregister();

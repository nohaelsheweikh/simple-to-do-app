import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import history from './utils/history';
import * as serviceWorker from './serviceWorker';

import App from './App';
import configureStore from './store/configureStore';
import reducers from './reducers/index'


const store = configureStore(reducers,history);
if(localStorage.jwtToken){


}
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
serviceWorker.unregister();

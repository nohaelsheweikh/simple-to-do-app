
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

let store;


export default function configureStore(initialState = {}, history:any) {
  const logger = createLogger();

  
  const composeEnhancers =(window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;  
  
      let createStoreWithMiddleware = composeEnhancers(
          applyMiddleware(thunk, logger)
      )(createStore);
  
      store = createStoreWithMiddleware(reducers, initialState);
  
  
      return store;
  
}

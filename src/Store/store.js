import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../Reducer/index'

const defaultState = {
    cart: []
};

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(logger)))

export default store;
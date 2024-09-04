import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';  // Import `thunk` as a named import
import { authReducer } from './reducers/authReducer';
import { taskReducer } from './reducers/taskReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

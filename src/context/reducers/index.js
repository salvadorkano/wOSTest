import {usersReducer, albumReducer} from './test';

const combineReducers = reducers => (state, action) => {
  let hasChanged;
  const nextState = Object.keys(reducers).reduce((result, key) => {
    result[key] = reducers[key](state[key], action);
    hasChanged = hasChanged || result[key] !== state[key];
    return result;
  }, {});
  return hasChanged ? nextState : state;
};

const rootReducer = combineReducers({
  users: usersReducer,
  album: albumReducer,
});

export default rootReducer;

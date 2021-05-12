import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();
import rootReducer from '../reducers';
import initialState from './initialState';

export const StoreProvider = ({children}) => (
  <StateContext.Provider value={useReducer(rootReducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStore = () => useContext(StateContext);

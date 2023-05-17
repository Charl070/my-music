import React, { createContext, useContext, useReducer } from "react";


export const StateContext = createContext();

export const StateProvider = ({ initial_state, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initial_state)}>
{children}
  </StateContext.Provider>
)


export const useStateProviderValue = () => useContext(StateContext)
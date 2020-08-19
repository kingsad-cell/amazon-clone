//set up data layer
// we need this to track basket

import React, { createContext, useContext,  useReducer } from "react";
// this is the data layer
export const StateContext = createContext();

// build a providerexport 

export const StateProvider = ({ reducer, initialState, Children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {Children}
    </StateContext.Provider>
    
    );

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
































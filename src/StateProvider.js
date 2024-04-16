import { useReducer, createContext, useContext } from "react";

// Creating the context here
export const StateContext=createContext();

// Defining the context here
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
// How to use the context
export const useStateValue=()=>useContext(StateContext);
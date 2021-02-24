//set up data layer
//we need this to track the basket

import { createContext, useContext, useReducer} from "react";

//this is the data layer
export const StateContext= createContext();

//Building a provider
export const StateProvider=({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}{/**is representing the app.js */}
    </StateContext.Provider>
);

//this how we use it inside a component
export const useStateValue=()=> useContext(StateContext);
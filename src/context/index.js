import React, {useContext, useReducer} from "react";
import { produce } from "immer";

export const AppContext = React.createContext();
export const Actions = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    INCREMENT_BY_NUMBER: 'increment_by_number',
    ASSIGN_VALUE_TO_ADD: 'assign_value_to_add',
}
const reducerFunction = (state,action)=>{
    switch(action.type){
        case Actions.INCREMENT:
            //return {...state, counter: state.counter+1};
            state.counter = state.counter+1;
            return;
        case Actions.DECREMENT:
            //return {...state, counter: state.counter-1};
            state.counter = state.counter-1;
            return;
        case Actions.INCREMENT_BY_NUMBER:
            //return {...state, counter: state.counter+ state.valueToAdd, valueToAdd: 0}
            state.counter = state.counter+state.valueToAdd;
            state.valueToAdd = 0;
            return;
        case Actions.ASSIGN_VALUE_TO_ADD:
            //return {...state,valueToAdd: action.payload}
            state.valueToAdd = action.payload;
            return;
        default:
            return state;
    }
};
export const Provider = (props)=>{
    const [state, dispatch] = useReducer(produce(reducerFunction),{ counter:0, valueToAdd: 0});
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
};

export const useAppContext = ()=>{
    const context =  useContext(AppContext);
    return context;
};

import React from "react";
import { Actions, useAppContext } from "../../context";

const DisplayCounter = ()=>{
    const { state, dispatch} = useAppContext();

    const handleIncrementBtnClick = ()=>{
        dispatch({
            type: Actions.INCREMENT,
        })
    };
    const handleDecrementBtnClick = ()=>{
        dispatch({
            type: Actions.DECREMENT,
        })
    };
    return (
        <>
            <h1>{state.counter}</h1>
            <button onClick={handleIncrementBtnClick}>increment</button>
            <button onClick={handleDecrementBtnClick}>decrement</button>
        </>
    )
};

export default DisplayCounter;

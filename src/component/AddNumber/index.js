import React from "react";
import { useAppContext, Actions } from "../../context";
const AddNumber = ()=>{
    const {state,dispatch} = useAppContext();
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        dispatch({
            type: Actions.INCREMENT_BY_NUMBER
        });
    };
    const handleInputChange = (e)=>{
        dispatch({
            type: Actions.ASSIGN_VALUE_TO_ADD,
            payload: parseInt(e.target.value)
        })
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <label>Add number</label>
            <input type="number" onChange={handleInputChange} value={state.valueToAdd || ''}></input>
            <button>Submit</button>
        </form>
    )
};

export default AddNumber;

import React, { useState } from 'react'

export const TodoInput = ({addTodo}) => {
    const [userInput, setUserInput]= useState(" ");
    const handleOnChange =(e)=>{
            setUserInput(e.currentTarget.value);
    }
    const handleSubmit =(e)=>{
    e.preventDefault();
    if(userInput.trim() !== ''){
        addTodo(userInput);
        setUserInput('');
    }}
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={userInput}  onChange={handleOnChange} className="input"/>
        <button>Add</button>
    </form>
    </>
  )
}

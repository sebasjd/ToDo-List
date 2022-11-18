import React, { useState } from 'react'
import { ButtonStyled, InputStyled } from './TodoListStyles';

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
        <InputStyled type="text" value={userInput}  onChange={handleOnChange} className="input"/>
        <ButtonStyled>Add</ButtonStyled>
    </form>
    </>
  )
}

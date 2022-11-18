import { ButtonStyled, InputStyled, TodoContainerStyled } from "./TodoListStyles"
import TodoList from './TodoList';
import Data from './Data.json'
import { useState } from 'react';
import { TodoInput } from "./TodoInput";

export const TodoContainer =()=>{
    const [todos, setTodos] = useState(Data)

    const onCompleted=(id)=>{
        setTodos(todos.map((todo) => {
            return todo.id === Number(id)? {...todo, completed: !todo.completed}: {...todo}; 
        }))
    }
    const onDeleteItem =(id)=>{
        setTodos([...todos].filter(todo => todo.id !==id))
    }
    const addTodo=(newTodo)=>{
        let newItem = {id: todos.length, task: newTodo, completed: false}
        setTodos([...todos, newItem])
    }

    return(
        <>
        <TodoContainerStyled>
            <TodoInput addTodo = {addTodo} />
            <ul>
                <TodoList todos = {todos} onCompleted = {onCompleted} onDeleteItem = {onDeleteItem}/>
            </ul>
        </TodoContainerStyled>
        </>
    )
}
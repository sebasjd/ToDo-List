import React from 'react'
import Data from './Data.json'
import TodoItem from './TodoItem'

const TodoList = ({todos, onCompleted, onDeleteItem}) => {
  return (
    <>
{todos.map((todo,index)=>(
    <TodoItem key={`todo-${index}`}todo = {todo} onCompleted={onCompleted} onDeleteItem = {onDeleteItem}/>
))
}
    </>
  )
}

export default TodoList
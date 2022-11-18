import React from 'react'

export default function TodoItem({todo, onCompleted, onDeleteItem}) {
    const getStyle = ()=>{
        return{
            textDecoration: todo.completed? 'line-through':'none'
        }
    }

        return (
            <li style={getStyle()}>
                <input type="checkbox" checked={todo.completed}
                    onChange={()=>onCompleted(todo.id)} className="check" id={todo.id}/>
                <label for={todo.id}></label>
                {todo.task}
                <button onClick={()=>{onDeleteItem(todo.id)}} className="Xbtn">X</button>
            </li>
    )
}

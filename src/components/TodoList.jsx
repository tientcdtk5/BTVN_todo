import React from 'react'
import PropTypes from "prop-types"
import TodoItem from './TodoItem'
import "./TodoList.css"

const TodoList = ({todos,onToggleStatus, onRemove}) => {
    const items= todos.map((todo)=>(
        <TodoItem 
        key={todo.id}
        todo={todo}
        onToggle={onToggleStatus}
        onRemove={onRemove}
        />
    ))
  return (
    <div className='todo-list'>
        {items}
    </div>
  )
}

export default TodoList
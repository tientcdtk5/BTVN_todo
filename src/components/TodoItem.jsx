import React from 'react'
import PropTypes from "prop-types"
import Checkbox from './Checkbox'
import Button from './Button'
import "./TodoItem.css"

// khai báo kiểu todo
/**
 * @typedef todo
 * @property {number} id -ID của todo
 * @property {string} title -nội dung của todo
 * @property {boolean} completed -trạng thái của todo
 */
/**
 * @typedef TodoItemProps
 * @property {todo} todo - Object chứa thông tin todo
 * 
 */
/**
 * Render một todo item
 *
 * @param {TodoItemProps} props Props truyền vào
 */
const TodoItem = ({todo,onToggle, onRemove}) => {
  return (
    <div className='todo-item'>
        <Checkbox 
        checked={todo.completed}
        onChange={()=>{
          onToggle(todo.id)
        }}/>
        {todo.title}
        <Button 
        variant="danger"
        onClick={() => onRemove(todo.id)} >
          Xóa
        </Button>
    </div>
  )
}
TodoItem.prototype={
  todo: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
  })
}
export default TodoItem
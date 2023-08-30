import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import "./TodoForm.css"
const TodoForm = ({onSubmit})=>{
const [input, setInput]= useState("");
const handleSubmit=(e)=>{
  e.preventDefault();

  onSubmit(input)
  setInput("")
 }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <Input  
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder='Work hard comes love!'/>
        <Button variant='primary'> Thêm</Button>
    </form>
  )
}

export default TodoForm
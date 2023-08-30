import React from 'react'
import "./Checkbox.css"
const Checkbox = ({checked, onChange}) => {
  return (
    <input
    className='todo-item-checkbox'
    type='checkbox'
    checked={checked}
    onChange={onChange}
    />
    
  )
}

export default Checkbox
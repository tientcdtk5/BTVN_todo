import React from 'react'
import PropTypes from "prop-types"
import "./Input.css"
/**
 * @typedef InputProps
 * @property {string} value Giá trị của Input
 * @property {string} placeholder Hiển thị ban đầu của ô Input
 */
/**
 * Hiển thị ô input để nhập công việc
 * @param {InputProps} props
 */
const Input = ({value, placeholder, onChange}) => {
  
  return (
    <input 
    className='todo-input'
    type="text"
    onChange={onChange}
    placeholder={placeholder}
    value={value} />
  )
}
Input.propTypes={
    value: PropTypes.string,
    placeholder: PropTypes.string
}
export default Input
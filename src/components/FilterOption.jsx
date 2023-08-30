import React from 'react'
import PropTypes from "prop-types"
import "./FilterOption.css"
/**
 * @typedef FilterOptionProps
 * @property {string} label Nhãn của Input
 * @property {string} value Giá trị của Input
 * @property {boolean} checked Cho biết ô input có được chọn hay không
 */
/**
 * Hiển thị danh sách một checkbox để lọc danh sách
 * @param{FilterOptionProps} props
 */
const FilterOption = ({label, value, checked}) => {
  return (
    <label className='filter-option-label'>
        <input 
        type="radio"
        name='filter-option-radio'
        value={value}
        checked={checked} />
        {label}
    </label>
  )
}
FilterOption.propTypes={
    label:PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool
}
export default FilterOption
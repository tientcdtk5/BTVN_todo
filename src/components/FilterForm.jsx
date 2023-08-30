import React from 'react'
import PropTypes from "prop-types"
import FilterOption from './FilterOption'
import "./FilterForm.css"

const FilterForm = ({items = [], value, onChange}) => {
  const options = items.map((item) => (
    <FilterOption key={item.value} {...item} checked={value === item.value} />
  ));
  return (
    <form className="filter-form" onChange={(e) => onChange(e.target.value)}>
    {options}
  </form>
    
    )
}

export default FilterForm
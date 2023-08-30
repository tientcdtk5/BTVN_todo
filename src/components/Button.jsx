import React from 'react'
import "./Button.css"
import PropTypes from "prop-types"
/**
 * @typedef ButtonProps
 * @property {"primary" | "danger"} variant Biến thể của nút
 */
/**
 * Hiển thị một nút
 * @param{React.PropsWithChildren<ButtonProps>} props
 */

const Button = ({variant, children, onClick,onRemoveAll}) => {
  return (
    <button 
      className={`btn btn-${variant}`} 
      onClick={onClick}
      onRemoveAll={onRemoveAll}
    >
        {children}
    </button>
    )
}
Button.propTypes={
    variant: PropTypes.oneOf(["primary"|"danger"]),
    children: PropTypes.node,
}

export default Button
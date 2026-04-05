import React from 'react'

const Buttons = ({text, variant}) => {
    const buttonClass = `btn ${variant === 'danger' ? 'btn-danger' : 'btn-primary'}`;
  return (
    <button type="submit" className={buttonClass}>
        {text}
    </button>
  )
}

export default Buttons
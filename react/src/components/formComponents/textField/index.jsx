import React, { useState } from 'react';
import './index.css';

function TextField({ label, onChange }) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (event) => {
    setIsFocused(false)
  }

  const handleInputChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className="text-input">
      <label className={`text-input__label`}>{label}</label>
      <div className="text-input__input-container">
        <input
          type="text"
          className="text-input__input"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default TextField

import { useState } from 'react'
import './index.css'

const Select = ({options, defaultValue, optionValue, optionLabel, onChange, placeholder}) => {

    const [value, setValue] = useState(defaultValue)

    const handleChange = (event) => {
        const newValue = event.target.value 
        setValue(newValue)
        onChange(newValue)
    }

    return (
        <div className="select-input-container">
            <select className="select-input" value={value} onChange={handleChange}>
                <option value="" disabled hidden>{placeholder}</option>
                {options.map((option) => (
                <option key={option[optionValue]} value={option[optionValue]}>
                    {option[optionLabel]}
                </option>
                ))}
            </select>
        </div>
    )
}

export default Select
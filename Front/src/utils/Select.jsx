
import React from 'react'

const Select = ({value, onChange, options}) => {
  return (
    <select value={value} onChange={onChange} className="block py-3 mb-4 w-30 font-bold text-sm text-white bg-gray border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-yellow focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>

  )
}

export default Select
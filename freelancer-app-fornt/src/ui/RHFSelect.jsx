import React from 'react'

function RHFSelect({ label, name, register, options, requierd }) {
    return ( 
        <div>
            <label
                htmlFor={name}
                className='mb-2 block text-secondary-700'
            >
                {label}{requierd && <span className='text-error'>*</span>}
            </label>
            <select
                {...register(name)} id={name}
                className='textField__input'
            >
                {options.map((option) => <option value={option.value} key={option.value}>
                    {option.label}
                </option>)}
            </select>
        </div>
    )
}

export default RHFSelect
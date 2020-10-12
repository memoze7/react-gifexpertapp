import React, { useState } from 'react'
import PropsType from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) {
            return
                    }
        setCategories(cats => [inputValue, ...cats ])
                    setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}> 
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                
                />
        </form>
    )
}

AddCategory.propsTypes = {
    setCategories: PropsType.func.isRequired
}
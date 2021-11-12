import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategoriess }) => {
    
    const [InputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => { 
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        
        if (InputValue.trim().length>2) {
            setCategoriess(cats => [ InputValue, ...cats ]);
            setInputValue('');
        }   
    }

    return (
        <form onSubmit= { handleSubmit }> 
            <input
                type="text"
                value={ InputValue }
                onChange= { handleInputChange }
            />
        </form>
    )
}

AddCategory.protoTypes = {
    setCategoriess: PropTypes.func.isRequired
}

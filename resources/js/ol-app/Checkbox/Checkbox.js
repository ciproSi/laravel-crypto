import React, { useState } from 'react'

const Checkbox = (props) => {
    
    const [checkboxes, setCheckboxes] = useState([
        {id: 1, name: 'canicross', checked: false},
        {id: 2, name: 'bikejoring', checked: false},
        {id: 3, name: 'dogtrekking', checked: false}
    ]);
    
    const handleChange = (e) => {
        
        const checkBoxIndex = checkboxes.findIndex((elm => elm.name == e.target.name));
        
        checkboxes[checkBoxIndex].checked = !checkboxes[checkBoxIndex].checked

        setCheckboxes([...checkboxes]);
    }

    return (
        <div className="checkbox-group">
            {
                checkboxes.map((checkbox) => (
                    <div className="form-group">
                            <input key={ checkbox.id } type="checkbox" name={ checkbox.name } checked={ checkbox.checked } onChange={ handleChange } />
                            { checkbox.name }    
                    </div>
                ))
            }
        </div>
        

    )
}

export default Checkbox;
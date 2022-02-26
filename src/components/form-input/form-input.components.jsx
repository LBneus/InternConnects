import React from "react";

import "./form-input.styles.scss";

const FormInput = ({placeholder}) => (
    <div className="group">
        <input className="form-input" placeholder={placeholder}/>        
    </div>
)

export default FormInput;
import React from "react";
// import PropTypes from 'prop-types';
// import _ from "lodash";

const Input= ({name,label,error,...rest})=>{
    
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} className="form-control"/>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;
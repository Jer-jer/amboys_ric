import React from 'react';

function Input({type, label}){
    return(
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">{label}</label>
            <input type={type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
    );
}

export default Input;
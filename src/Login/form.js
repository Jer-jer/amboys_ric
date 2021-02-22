import React from 'react';
import Input from './input';

function Form(){
    return(
        <form>
            <Input type="email" label="Email Address"/>
            <Input type="password" label="Password"/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    ); 
}

export default Form;
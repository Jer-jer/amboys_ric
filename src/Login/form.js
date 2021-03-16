import React from 'react';
import FormControl from './form_control';
import { Button } from '@material-ui/core';

function Form() {
    return (
        <form>
            <FormControl type="email" label="Email Address"/>
            <br />
            <FormControl type="password" label="Password"/>
            <br />
            <Button variant="contained" color="primary">Submit</Button>
        </form>
    );
}

export default Form;
import React from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';

function FormCont({ type, label, specs }) {
    return (
        <div>
            <FormControl className={specs}>
                <InputLabel htmlFor="my-input">{label}</InputLabel>
                <Input type={type} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
        </div>
    );
}

export default FormCont;
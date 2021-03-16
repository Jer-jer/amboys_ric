import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, FormControlLabel } from '@material-ui/core';

function FormCont({ type, label }) {
    return (
        <FormControl>
            <InputLabel htmlFor="my-input">{label}</InputLabel>
            <Input type={type} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
    );
}

export default FormCont;
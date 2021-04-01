import React from 'react';
import { makeStyles, withStyles, styled } from '@material-ui/core/styles';
import { FormControl, InputLabel, Input } from '@material-ui/core';

const WidthFullControl = styled(FormControl)({
    fullWidth: true
});

function FormCont({ type, label }) {
    return (
        <WidthFullControl>
            <InputLabel htmlFor="my-input">{label}</InputLabel>
            <Input type={type} id="my-input" aria-describedby="my-helper-text" />
        </WidthFullControl>
    );
}

export default FormCont;
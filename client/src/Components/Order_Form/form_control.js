import React from 'react';
import { makeStyles, withStyles, styled } from '@material-ui/core/styles';
import { FormControl, InputLabel, Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

function FormCont({ type, label }) {
    const classes = useStyles();

    return (
        <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="my-input">{label}</InputLabel>
            <Input type={type} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
    );
}

export default FormCont;
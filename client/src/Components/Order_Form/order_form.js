import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Grid } from '@material-ui/core';

//Custom Imports
import FormControl from './form_control';
import Range from './range';
import Logo from '../Logo(temp)/logo';
import Select from './select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
}));

export default function Order_form() {
    const classes = useStyles();
    const [choice, setChoice] = useState('');

    const handleChange = (event) => {
        setChoice(event.target.value);
    };

    return (
        <div>
            <Logo />
            <Box pl={2}>
                <h2>Order Form</h2>
            </Box>
        </div>
    );
}
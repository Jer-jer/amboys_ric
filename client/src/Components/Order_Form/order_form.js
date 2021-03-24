import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
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
                <form action="" method="post">
                    <FormControl type="text" label="Full Name" specs={classes.formControl} />
                    <br />
                    <FormControl type="text" label="Contact Number" specs={classes.formControl} />
                    <br />
                    <FormControl type="text" label="ID Number" specs={classes.formControl} />
                    <br />
                    <FormControl type="email" label="Email Address" specs={classes.formControl} />
                    <br />
                    <Select choice={choice} action={handleChange} specs={classes.formControl} />
                    <br />
                    <Range />
                    <Button variant="contained" type="submit" color="primary">Order</Button>
                </form>
            </Box>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Grid, FormControl, InputLabel, Input, Select, FormHelperText, MenuItem } from '@material-ui/core';

//Custom Imports
import Inputs from './form_control';
import Range from './range';
import Logo from '../Logo(temp)/logo';
import Selects from './select';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function Order_form() {
    const classes = useStyles();
    const [choice, setChoice] = useState('');

    const mainDish = {
        id: [
            'ginaling',
            'pork_sisig',
            'pork_humba',
            'pork_siomai'
        ],
        label: [
            'Ginaling',
            'Pork Sisig',
            'Pork Humba',
            'Pork Siomai'
        ]
    };
    const appetizer = {
        id: ['ampalaya_with_egg'],
        label: ['Ampalaya w/ Egg']
    };
    const soup = {
        id: ['birds_nest'],
        label: ["Bird's Nest"]
    };
    const rice = {
        id: [
            'plain_rice',
            'fried_rice_with_egg'
        ],
        label: [
            'Plain Rice',
            'Fried Rice w/ Egg'
        ]
    };
    const beverages = {
        id: [
            'coke',
            'sprite',
            'royal',
            'pepsi'
        ],
        label: [
            'Coke',
            'Sprite',
            'Royal',
            'Pepsi'
        ]
    };


    const handleChange = (event) => {
        setChoice(event.target.value);
    };

    const select = (choices) => {
        return (
            <FormControl fullWidth className={classes.margin}>
                <InputLabel shrink id="demo-simple-select-label">Item</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={choice}
                    onChange={handleChange}
                    displayEmpty
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        choices.label.map((item, id) =>
                            <MenuItem value={item.toLowerCase()}>{item}</MenuItem>

                        )
                    }
                </Select>
                <FormHelperText>Choose your desired item</FormHelperText>
            </FormControl>
        );
    };

    return (
        <div className={classes.root}>
            <Logo />
            <form action="POST">
                <Grid container spacing={1}>
                    <Grid item xs={12}><h2>Order Form</h2></Grid>
                    <Grid item xs={6}>
                        <Inputs type="text" label="ID Number" />
                    </Grid>
                    <Grid item xs={6}>
                        <Inputs type="text" label="Full Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <Inputs type="email" label="Email" />
                    </Grid>
                    <Grid item xs={6}>
                        <Inputs type="text" label="Mobile Number" />
                    </Grid>

                    {/* Main Dish */}
                    <Grid item xs={12}><h4>Main Dish</h4></Grid>
                    <Grid item xs={6}>
                        <Selects action={handleChange} choice={choice} choices={mainDish} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="my-input">Quantity</InputLabel>
                            <Input type="text" id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>

                    {/* Appetizer */}
                    <Grid item xs={12}><h4>Appetizer</h4></Grid>
                    <Grid item xs={6}>
                        <Selects action={handleChange} choice={choice} choices={appetizer} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="my-input">Quantity</InputLabel>
                            <Input type="text" id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>

                    {/* Soups */}
                    <Grid item xs={12}><h4>Soups</h4></Grid>
                    <Grid item xs={6}>
                        <Selects action={handleChange} choice={choice} choices={soup} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="my-input">Quantity</InputLabel>
                            <Input type="text" id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>

                    {/* Rice */}
                    <Grid item xs={12}><h4>Rice</h4></Grid>
                    <Grid item xs={6}>
                        <Selects action={handleChange} choice={choice} choices={rice} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="my-input">Quantity</InputLabel>
                            <Input type="text" id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>

                    {/* Beverage */}
                    <Grid item xs={12}><h4>Beverage</h4></Grid>
                    <Grid item xs={6}>
                        <Selects action={handleChange} choice={choice} choices={beverages} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="my-input">Quantity</InputLabel>
                            <Input type="text" id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>
                </Grid>

                {/* align left */}
                <Button variant="contained" color="primary" style={{ marginLeft: "auto" }}>
                        Submit
                </Button>

                {/* align right */}
                {/* <div style={{ display: "flex" }}>
                    <Button variant="contained" color="primary" style={{ marginLeft: "auto" }}>
                        Submit
                    </Button>
                </div> */}
            </form>
        </div>
    );
}
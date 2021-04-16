import React, { useState } from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, Grid, Select, MenuItem } from '@material-ui/core';
import { InputLabel, Input, InputAdornment } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            fullWidth: true,
            require: true,
        }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FormContent() {
    const classes = useStyles();
    const [values, setValues] = useState(0);
    const [emp, setEmp] = React.useState('waiter');

    const handleChange = (e) => {
        setEmp(e.target.value);
    };

    const handleAmount = (e) => {
        setValues(e.target.value);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            autoFocus
                            id="empId"
                            label="Employee ID"
                            type="text"
                            helperText="How to create an ID is taught by the manager"
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField
                            id="emplName"
                            label="Last Name"
                            type="text"
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField
                            id="empfName"
                            label="First Name"
                            type="text"
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField
                            id="empEmail"
                            label="Email Address"
                            type="text"
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl disabled fullWidth>
                        <TextField
                            id="empPassword"
                            label="Password"
                            type="password"
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField
                            id="empContact"
                            label="Contact Number"
                            type="text"
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <InputLabel>Age</InputLabel>
                        <Select
                            id="demo-simple-select"
                            value={emp}
                            onChange={handleChange}
                        >
                            <MenuItem value="waiter">Waiter</MenuItem>
                            <MenuItem value="cashier">Cashier</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    );
}
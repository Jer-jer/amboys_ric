import React, { useState } from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, Grid, Select, MenuItem, IconButton } from '@material-ui/core';
import { InputLabel, Input, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

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

export default function FormContent({ user, handleChange }) {
    const classes = useStyles();
    const [showPass, setShowPass] = useState(false); 

    const handleClickShowPassword = () => {
        setShowPass(!showPass);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                            value={user.empID}
                            onChange={handleChange('empID')}
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
                            onChange={handleChange('empLname')}
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
                            onChange={handleChange('empFname')}
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
                            onChange={handleChange('empEmail')}
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPass ? 'text' : 'password'}
                            onChange={handleChange('empPass')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPass ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField
                            id="empContact"
                            label="Contact Number"
                            type="text"
                            onChange={handleChange('contact')}
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <InputLabel>Position</InputLabel>
                        <Select
                            id="demo-simple-select"
                            value={user.job}
                            onChange={handleChange('job')}
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
import React, { useState } from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, Grid } from '@material-ui/core';
import { InputLabel, Input, InputAdornment } from '@material-ui/core';

//Custom Imports
import '../../../materials/css/addprod.css'
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

export default function FormContent({ product, handleChange }) {
    const classes = useStyles();
    const [values, setValues] = useState(0);

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
                            id="prodId"
                            label="Product ID"
                            type="text"
                            helperText="How to create an ID is taught by the manager"
                            onChange={handleChange('id')}
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField
                            id="prodName"
                            label="Product Name"
                            type="text"
                            onChange={handleChange('prodName')}
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField
                            id="prodQuantity"
                            label="Product Quantity"
                            type="text"
                            helperText="Product must be lower than 500"
                            value={product.prodQuantity}
                            onChange={handleChange('prodQuantity')}
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="price">Amount</InputLabel>
                        <Input
                            id="price"
                            onChange={handleAmount}
                            startAdornment={<InputAdornment position="start">Php</InputAdornment>}
                            value={product.price}
                            onChange={handleChange('price')}
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl disabled fullWidth>
                        <InputLabel htmlFor="component-disabled">Status</InputLabel>
                        <Input id="status" value="Available" className="available" disabled />
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    );
}
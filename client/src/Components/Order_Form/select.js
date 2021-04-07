import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, FormHelperText, Select, MenuItem, ListSubheader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function Sel({ action, choice, choices }) {
    const classes = useStyles();
    return (
        <FormControl fullWidth className={classes.margin}>
            <InputLabel shrink id="demo-simple-select-label">Item</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={choice}
                onChange={action}
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
}
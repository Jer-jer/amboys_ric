import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const DarkerDisabledTextField = withStyles({
    root: {
        "& .MuiInputBase-root.Mui-disabled": {
            color: "rgba(0, 0, 0, 1)"
        },
        "& .MuiFormLabel-root.Mui-disabled":{
            color: "rgba(0, 0, 0, 1)"
        }
    }
})(TextField);

export default function Customer() {
    return (
        <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <DarkerDisabledTextField
                        disabled
                        label="Customer ID"
                        defaultValue="f89asd165sa4wqe"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <DarkerDisabledTextField
                        disabled
                        label="Name"
                        defaultValue="Allan Jericho Bargamento"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <DarkerDisabledTextField
                        disabled
                        label="Email"
                        defaultValue="jerichoallan0@gmail.com"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <DarkerDisabledTextField
                        disabled
                        label="Mobile Number"
                        defaultValue="09458034816"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </DialogContentText>
    );
}
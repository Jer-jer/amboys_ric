import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

//Custom Imports
import '../../materials/css/sales.css';
import Chart from './data';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '250px',
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    }
}));

export default function Sales() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className="chart" elevation={3}>
                <Chart />
            </Paper>
        </div>
    );
}
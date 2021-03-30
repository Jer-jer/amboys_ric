import React from 'react';
import { Grid } from '@material-ui/core';

//Custom Import
import Card from './card';

export default function Orders() {
    return (
        <Grid container spacing={3}>
            {/* First Row */}
            <Grid item xs={3}>
                <Card />
            </Grid>
            <Grid item xs={3}>
                <Card />
            </Grid>
            <Grid item xs={3}>
                <Card />
            </Grid>
            <Grid item xs={3}>
                <Card />
            </Grid>

            {/* Second Row */}
            <Grid item xs={3}>
                <Card />
            </Grid>
            <Grid item xs={3}>
                <Card />
            </Grid>
            <Grid item xs={3}>
                <Card />
            </Grid>
            <Grid item xs={3}>
                <Card />
            </Grid>

            {/* Third Row */}
            <Grid item xs={3}>
                <Card />
            </Grid>
            <Grid item xs={3}>
                <Card />
            </Grid>
            <Grid item xs={3}>
                <Card />
            </Grid>
            <Grid item xs={3}>
                <Card />
            </Grid>
        </Grid>
    );
}
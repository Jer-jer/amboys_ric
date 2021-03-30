import React from 'react';
import Card from './card';
import '../../materials/css/order.css';
import Logo from '../Logo(temp)/logo';
import { Box, Grid } from '@material-ui/core';

function Order() {
    return (
        <div>
            <Logo />
            <h1>Choose from these items</h1>
            <br />
            <h3>Main Dishes</h3>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card img="/img/ginaling.jpeg" item="Ginaling" price="Php 25.00" />
                </Grid>
                <Grid item xs={3}>
                    <Card img="/img/sisig.jpg" item="Pork Sisig" price="Php 30.00" />
                </Grid>
                <Grid item xs={3}>
                    <Card img="/img/pork-humba.jpg" item="Pork Humba" price="Php 35.00" />
                </Grid>
                <Grid item xs={3}>
                    <Card img="/img/pork-siomai.jpg" item="Pork Siomai" price="Php 8.00" />
                </Grid>
            </Grid>
            <Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h3>Appetizers</h3>
                </Grid>
                <Grid item xs={3}>
                    <Card img="/img/ampalayawithegg.jpg" item="Ampalaya With Egg" price="Php 15.00" />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h3>Soups</h3>
                </Grid>
                <Grid item xs={3}>
                    <Card img="/img/birdsnestsoup.jpg" item="Bird's Nest" price="Php 10.00" />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h3>Rices</h3>
                </Grid>
                <Grid item xs={3}>
                    <Card img="/img/rice.jpg" item="Plain Rice" price="Php 10.00" />
                </Grid>
                <Grid item xs={3}>
                    <Card img="/img/egg-fried-rice.jpg" item="Fried Rice" price="Php 20.00" />
                </Grid> 
            </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h3>Beverages</h3>
                </Grid>
                <Grid item xs={3}>
                    <Card img="/img/coke.jpg" item="Coke" price="Php 15.00" />
                </Grid> 
                <Grid item xs={3}>
                    <Card img="/img/sprite.jpg" item="Sprite" price="Php 15.00" />
                </Grid> 
                <Grid item xs={3}>
                    <Card img="/img/royal.jpg" item="Royal" price="Php 15.00" />
                </Grid> 
                <Grid item xs={3}>
                    <Card img="/img/pepsi.jpg" item="Pepsi" price="Php 15.00" />
                </Grid> 
            </Grid>
            {/* get item from database and put it here */}
        </div>
    );
}

export default Order;
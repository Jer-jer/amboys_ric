import React from 'react';
import FormControl from './form_control';
import Range from './range';
import { Button, Box } from '@material-ui/core';

export default function Order_form() {
    return (
        <div>
            <Box pl={2}>
                <h2>Order Form</h2>
                <form action="" method="post">
                    <FormControl type="text" label="Full Name"/>
                    <br />
                    <br />
                    <FormControl type="text" label="Contact Number"/>
                    <br />
                    <br />
                    <FormControl type="text" label="ID Number"/>
                    <br />
                    <br />
                    <FormControl type="text" label="Email Address"/>
                    <br />
                    <br />
                    <Range />
                    <Button variant="contained" type="submit" color="primary">Order</Button>
                </form>
            </Box>
        </div>
    );
}
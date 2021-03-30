import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

//Custom Import
import Customer from './customer';

export default function Dialog() {
    return (
        <div>
            <DialogTitle id="alert-dialog-slide-title">{"Customer's Information"}</DialogTitle>
            <DialogContent>
                <Customer />
            </DialogContent>
        </div>
    );
}
import React from 'react';
import AppBar from '../AppBars/AppBar(Manager)/appbar';

export default function EmployeeHome({ userID, logOut }) {
    return (
        <div>
            <AppBar userID={userID} signOut={logOut}/>
        </div>
    );
}
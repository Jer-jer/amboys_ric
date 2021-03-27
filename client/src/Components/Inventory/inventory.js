import React from 'react';
import AppBar from '../AppBars/AppBar(Manager)/appbar';

export default function EmployeeHome({ user }) {
    return (
        <div>
            <AppBar user={user} />
        </div>
    );
}
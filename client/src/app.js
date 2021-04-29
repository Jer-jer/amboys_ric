import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, Link, Redirect } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Axios from 'axios';

//Custom Imports
import Home from './Components/Home/home';
import Login from './Components//Login/Login';
import Order from './Components//Order/order';
import Order_Form from './Components/Order_Form/order_form';
import Inventory from './Components/Inventory/inventory';

export default function App() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        Axios({
            method: 'GET',
            withCredentials: true,
            url: "http://localhost:3001/user",
        }).then((res) => {
            if (res.data != null) {
                setUser(res.data);
            }
        })
    }, []);

    return (
        <Router>
            <Box pl={2}>
                {/* Customer POV Links */}
                <Switch>
                    {/* Set the links/paths here */}
                    <Route exact path="/">
                        {user ? Inventory : Home}
                    </Route>
                    {/* <Route path="/" exact component={loggedIn} /> */}
                    <Route exact path="/login">
                        {user ? <Redirect to="/" /> : Login}
                    </Route>
                    <Route path="/order" exact component={Order} />
                    <Route path="/order_form" exact component={withRouter(Order_Form)} />
                </Switch>
            </Box>
            {/* Employee POV Links */}
            <Switch>
                {/* Set the links/paths here */}
            </Switch>
        </Router>
    );
}
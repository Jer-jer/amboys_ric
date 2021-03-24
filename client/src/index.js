import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Home from './Components/Home/home';
import reportWebVitals from './reportWebVitals';
import Login from './Components//Login/Login';
import Order from './Components//Order/order';
import Order_Form from './Components//Order_Form/order_form';
import Inventory from './Components//Inventory/inventory';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { Box } from '@material-ui/core';
// import local css and js here
// format: import '/css/css.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Box pl={2}>
        {/* Customer POV Links */}
        <Switch>
          {/* Set the links/paths here */}
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/order" exact component={Order} />
          <Route path="/order_form" exact component={withRouter(Order_Form)} />
        </Switch>
      </Box>
      {/* Employee POV Links */}
      <Switch>
        {/* Set the links/paths here */}
        <Route path="/inventory" exact component={Inventory} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

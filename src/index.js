import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './materials/css/main.css';
import Home from './Home/home';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';
import Order from './Order/order';
import Order_Form from './Order_Form/order_form';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Box } from '@material-ui/core';
// import local css and js here
// format: import '/css/css.css';

ReactDOM.render(
  <React.StrictMode>
    <Box pl={2}>
      <h1>Amboy's Food Stall</h1>
      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/order" exact component={Order} />
        <Route path="/order_form" exact component={withRouter(Order_Form)} />
      </Switch>
      </Router>
    </Box>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

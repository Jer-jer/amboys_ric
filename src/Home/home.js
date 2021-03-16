import React from 'react';
import Login from '../Login/Login';
import Order from '../Order/order';
import Order_Form from '../Order_Form/order_form';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div>
      <Link to="/login">
        <Button variant="contained" color="primary">
          Login
      </Button>
      </Link>
      <br />
      <br />
      <Link to="/order">
        <Button variant="contained" color="primary">
          Order
      </Button>
      </Link>
    </div>
  );
}

// function Home() {
//   return (
//     <div>

//     </div>
//   );
// }

export default App;
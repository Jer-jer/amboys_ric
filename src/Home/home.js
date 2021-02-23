import React from 'react';
import Login from '../Login/Login';
import Order from '../Order/order';
import Order_Form from '../Order_Form/order_form';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="/login">
        <button type="button" className="btn btn-primary">Login</button>
      </Link>
      <br />
      <br />
      <Link to="/order">
        <button type="button" className="btn btn-primary">Order</button>
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
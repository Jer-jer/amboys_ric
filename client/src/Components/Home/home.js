import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

//Custom Imports
import '../../App.css';
import Logo from '../Logo(temp)/logo'
import Inventory from '../Inventory/inventory';

export default function Home({ user }) {

  const notLoggedin = (
    <div className="home">
      <Logo />
      <Link to="/login">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
      <br />
      <Link to="/order">
        <Button variant="contained" color="primary">
          Order
        </Button>
      </Link>
    </div>
  );

  return (
    <div>
      {(user != undefined) ? (
        Inventory()
      ) : (
        notLoggedin
      )}
    </div>
  );
}

// function Home() {
//   return (
//     <div>

//     </div>
//   );
// }

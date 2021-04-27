import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, Link, Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Axios from 'axios';

//Custom Imports
import '../../App.css';
import Logo from '../Logo(temp)/logo'
import Inventory from '../Inventory/inventory';

export default function Home() {
  // const [checker, setChecker] = useState(false);
  // const [user, getUser] = useState(null);

  // useEffect(() => {
  //   Axios({
  //     method: 'GET',
  //     withCredentials: true,
  //     url: "http://localhost:3001/user",
  //   })
  //     .then((res) => {
  //       if(res.data != null){
  //         setChecker(true);
  //       }
  //     })
  // }, [])

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
    // <Router>
    //   <Route exact path="/">
    //     {checker == true ? <Inventory /> : notLoggedin}
    //   </Route>
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
      // {notLoggedin}
      // {/* {(user) ? (
      //   <Inventory user={user} />
      // ) : (
      //   notLoggedin
      // )} */}
    // </Router>
  );
}

// function Home() {
//   return (
//     <div>

//     </div>
//   );
// }

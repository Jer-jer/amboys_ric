import React from 'react';
import '../App.css';
import Logo from '../Logo(temp)/logo'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function App() {
  return (
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
}

// function Home() {
//   return (
//     <div>

//     </div>
//   );
// }

export default App;
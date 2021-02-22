import React from 'react';
import Login from './Login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Amboy's Food Stall</h1>
    <Link to="/login">
      <button type="button" className="btn btn-primary">Login</button>
    </Link>
  </div>
);

export default App;
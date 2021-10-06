import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from './views/Login';

function App() {
  return (
    <Router>
      <navbar/>
      <div className= "App">

        <swith>
          <Route>
            <Login />
          </Route>

        </swith>



      </div>
    </Router>
  );
}

export default App;

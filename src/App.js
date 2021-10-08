<<<<<<< HEAD
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
=======
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return <Layout />;
>>>>>>> 0214123d4226cf24177ead6f670a26e4ae743051
}

export default App;

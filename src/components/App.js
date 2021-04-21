import React from "react";

import HomePage from "./HomePage";
import MappedEvents from "./MappedEvents";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
    <MappedEvents />
    <HomePage />
    <Login/>
    </div>

  );
}

export default App;

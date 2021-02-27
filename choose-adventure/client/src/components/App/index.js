import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "../NavBar";
import Footer from "../Footer";
import Github from "../Pages/Github";
import Admin from "../Pages/Admin";
import Story from "../Pages/Story";
import "./style.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/github">
            <Github />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Story />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NavBar from "./NavBar";

const AppRouter = () => (
  <Router>
    <div>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  </Router>
)

export default AppRouter
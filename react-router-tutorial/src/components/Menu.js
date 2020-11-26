import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Home, About } from "../pages";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/foo">About Foo</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/about/:name" component={About} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Menu;

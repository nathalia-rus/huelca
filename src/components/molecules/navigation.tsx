import * as React from "react";
import MenuItem from "../atoms/menuitem";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "../pages/home";

export interface INavigationProps {
  menuitems: String[];
  navigationurl: String[];
}

const Navigation: React.SFC<INavigationProps> = props => (
  <Router>
    <nav className="navigation">
      {props.menuitems.map((i: String, index: Number) => {
        return (
          <Link to={"/"}>
            <MenuItem menuitem={i} />
          </Link>
        );
      })}
    </nav>
    <Route path="/" exact component={HomePage} />
  </Router>
);

export default Navigation;

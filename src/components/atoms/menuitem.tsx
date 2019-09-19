import "./styles.css";
import * as React from "react";

const styles = {
  fontSize: 16,
  padding: "25px"
};
export interface IMenuItemProps {
  menuitem: String;
}

const MenuItem: React.SFC<IMenuItemProps> = props => (
  <h1 style={styles}> {props.menuitem}</h1>
);
MenuItem.defaultProps = {
  menuitem: "Home"
};
export default MenuItem;

import "./styles.css";
import * as React from "react";
export interface IAppNameProps {
  name: String;
}

const AppName: React.SFC<IAppNameProps> = props => (
  <h1 className="appName"> {props.name}</h1>
);
AppName.defaultProps = {
  name: "Huelca"
};
export default AppName;

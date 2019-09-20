import React from "react";
import AppName from "./components/atoms/appName";
import Navigation from "./components/molecules/navigation";
import { connect } from "react-redux";
import { IHuelDataProps, IAppState } from "./redux/interface";
import "./App.css";
import { getHuelData } from "./redux/actions/actions";

export class App extends React.Component<IHuelDataProps, IAppState> {
  componentDidMount() {
    return this.props.getHuelData();
  }

  render() {
    return (
      <div className="App">
        <Navigation
          menuitems={["home", "logs", "ratings", "charts"]}
          navigationurl={["home", "logs", "ratings", "charts"]}
        />
        <AppName name="Huelca" />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  powders: state.powders,
  boosts: state.boosts
});

const mapDispatchToProps = (dispatch: Function) => ({
  getHuelData: () => dispatch(getHuelData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

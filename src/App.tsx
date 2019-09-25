import React from "react";
import AppName from "./components/atoms/appName";
import Navigation from "./components/molecules/navigation";
import { connect } from "react-redux";
import { IAppProps, IAppState, IFormData } from "./redux/interface";
import "./App.css";
import { getHuelData, submitFormData } from "./redux/modules/actions/actions";
import { fetchHuelDataEpic } from "./redux/modules/epics/fetchHuelData";

export class App extends React.Component<IAppProps, IAppState> {
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
  powders: state.hueldata.powders,
  boosts: state.hueldata.boosts,
  formData: state.formdata
});

const mapDispatchToProps = (dispatch: Function) => ({
  getHuelData: () => dispatch(getHuelData()),
  submitFormData: (data: IFormData) => dispatch(submitFormData(data)),
  fetchHuelDataEpic: () => dispatch(fetchHuelDataEpic())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React from "react";

// import Button from "../atoms/button";

import { getHuelData, submitFormData } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { IAppProps, IAppState, IFormData } from "../../redux/interface";

import Dropdown from "../molecules/dropdown";
const styles = {
  marginTop: "20vh"
};

export class HomePage extends React.Component<IAppProps, IAppState> {
  state = {
    isLoading: false
  };

  render() {
    return (
      <div style={styles}>
        <h2> Welcome Hueler! </h2>

        <h3> Enter your daily Huel Log </h3>

        <Dropdown />

        {/* 
        <button type="button" onClick={() => this.props.getHuelData()}>
          Test redux action
        </button> */}

        {console.log(this.props)}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  formData: state.formData,
  boosts: state.hueldata.boosts,
  powders: state.hueldata.powders
});

const mapDispatchToProps = (dispatch: Function) => ({
  getHuelData: () => dispatch(getHuelData()),
  submitFormData: (data: IFormData) => dispatch(submitFormData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

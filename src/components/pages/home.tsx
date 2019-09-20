import React from "react";

// import Button from "../atoms/button";

import { getHuelData } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { IHuelDataProps, IAppState } from "../../redux/interface";

import Dropdown from "../molecules/dropdown";
const styles = {
  marginTop: "20vh"
};

export class HomePage extends React.Component<IHuelDataProps, IAppState> {
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
)(HomePage);

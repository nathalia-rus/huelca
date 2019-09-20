import React from "react";

// import Button from "../atoms/button";

import { powdersList, boostsList } from "../data";

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

        <p> Those are your to powders :</p>

        <Dropdown />

        {powdersList(this.props.powders)}

        <p> Those are your to boosts :</p>
        {boostsList(this.props.boosts)}

        <button type="button" onClick={() => this.props.getHuelData()}>
          Test redux action
        </button>
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

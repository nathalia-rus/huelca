import * as React from "react";
import { IHuelDataProps } from "../../redux/interface";
import "./styles.css";
import { IPowder, IBoost } from "../../redux/interface";
import { connect } from "react-redux";
import { getHuelData } from "../../redux/actions/actions";

import { Formik } from "formik";

const styles = {
  width: "100vw",
  display: "flex",
  justifyContent: "center"
};

const field = {
  marginTop: "20px"
};

type IState = {
  powder: String;
  boost: String;
  scoops: Number;
  portions: Number;
  boostNumber: 0;
};

export class Dropdown extends React.Component<IHuelDataProps, IState> {
  state: IState = {
    powder: "Please select",
    boost: "Please select",
    scoops: 0,
    portions: 0,
    boostNumber: 0
  };

  boostsList = (list: IBoost[]) => {
    if (list.length > 0) {
      return list.map((i: IBoost, index: any) => {
        return <option value={`${i.flavour}`}>{`${i.flavour}`}</option>;
      });
    }
  };

  powdersList = (list: IPowder[]) => {
    if (list.length > 0) {
      return list.map((i: IPowder, index: any) => {
        return <option value={`${i.flavour}`}>{`${i.flavour}`}</option>;
      });
    }
  };

  enumList = (list: Number[]) => {
    if (list.length > 0) {
      return list.map((i: Number, index: any) => {
        return <option value={`${i}`}>{`${i}`}</option>;
      });
    }
  };

  render() {
    return (
      <div style={styles}>
        <div className="form">
          <p style={field}> Please enter your powder: </p>
          <select style={field}>
            <option value="0">Select powder:</option>
            {this.powdersList(this.props.powders)}
          </select>
          <p style={field}> Please enter the number of scoops:</p>
          <select style={field}>
            <option value="0">Number of scoops per portion (meal):</option>
            {this.enumList([
              0,
              0.5,
              1,
              1.5,
              2,
              2.5,
              3,
              3.5,
              4,
              4.5,
              5,
              5.5,
              6,
              6.5,
              7
            ])}
          </select>
          <p style={field}> Please enter the number of portions (meals):</p>
          <select style={field}>
            <option value="0">Number of portions (meals):</option>
            {this.enumList([1, 2, 3, 4, 5])}
          </select>
          <p style={field}> Please enter the number of boosts:</p>
          <div>
            <select style={field}>
              <option value="0">Select boost:</option>
              {this.boostsList(this.props.boosts)}
            </select>
            <button style={{ marginLeft: "20px" }} type="button">
              Add boost?
            </button>
          </div>

          <button style={{ marginTop: "30px" }} type="button">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  getHuelData: () => dispatch(getHuelData())
});

const mapStateToProps = (state: any) => ({
  powders: state.powders,
  boosts: state.boosts
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);

import React from "react";
import { IHuelDataProps } from "../../redux/interface";
import "./styles.css";
import { IPowder, IBoost } from "../../redux/interface";
import { connect } from "react-redux";
import { getHuelData } from "../../redux/actions/actions";

// import { Formik } from "formik";

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
  submitted: Boolean;
};

export class Dropdown extends React.Component<IHuelDataProps, IState> {
  state: IState = {
    powder: "Please select",
    boost: "Please select",
    scoops: 0,
    portions: 0,
    boostNumber: 0,
    submitted: false
  };

  boostsList = (list: IBoost[]) => {
    if (list.length > 0) {
      return list.map((i: IBoost, index: any) => {
        return (
          <option key={index} value={`${i.flavour}`}>{`${i.flavour}`}</option>
        );
      });
    }
  };

  powdersList = (list: IPowder[]) => {
    if (list.length > 0) {
      return list.map((i: IPowder, index: any) => {
        return (
          <option key={index} value={`${i.flavour}`}>{`${i.flavour}`}</option>
        );
      });
    }
  };

  enumList = (list: Number[]) => {
    if (list.length > 0) {
      return list.map((i: Number, index: any) => {
        return <option key={index} value={`${i}`}>{`${i}`}</option>;
      });
    }
  };

  // handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    alert("changing state");
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit: React.ReactEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      submitted: true
    });
  };

  handleClear: React.ReactEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    alert("State being reset!");
    this.setState({
      powder: "Please select",
      boost: "Please select",
      scoops: 0,
      portions: 0,
      boostNumber: 0,
      submitted: false
    });
  };

  render() {
    return (
      <div style={styles}>
        {console.log(this.state)}
        <div className="form">
          <p style={field}> Please enter your powder: </p>
          <select
            name="powder"
            style={field}
            value={`${this.state.powder}`}
            onChange={e => this.handleChange}
          >
            <option defaultValue="Select powder">Select powder:</option>
            {this.powdersList(this.props.powders)}
          </select>
          <p style={field}> Please enter the number of scoops:</p>
          <select
            style={field}
            name="scoops"
            defaultValue={`${this.state.scoops}`}
          >
            <option defaultValue="0">
              Number of scoops per portion (meal):
            </option>
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
          <select
            style={field}
            name="portions"
            defaultValue={`${this.state.portions}`}
          >
            <option value="0">Number of portions (meals):</option>
            {this.enumList([1, 2, 3, 4, 5])}
          </select>
          <p style={field}> Please enter the number of boosts:</p>
          <div>
            <select
              name="boost"
              style={field}
              defaultValue={`${this.state.boost}`}
            >
              <option defaultValue="Select boost">Select boost:</option>
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

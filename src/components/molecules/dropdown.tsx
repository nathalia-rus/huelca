import * as React from "react";
// import { IAppProps, IFormData } from "../../redux/interface";
import "./styles.css";
// import { IPowder, IBoost } from "../../redux/interface";
import { connect } from "react-redux";

const styles = {
  width: "100vw",
  display: "flex",
  justifyContent: "center"
};

const field = {
  marginTop: "20px"
};

type IformDataState = {
  powder: String;
  boost: String;
  scoops: number;
  portions: number;
  boostNumber: number;
  submitted: boolean;
  calories: number;
};
export class Dropdown extends React.Component<IAppProps, IformDataState> {
  state: IformDataState = {
    powder: "Please select",
    boost: "Please select",
    scoops: 0,
    portions: 0,
    boostNumber: 0,
    submitted: false,
    calories: 0
  };

  componentDidMount() {
    console.log("starting state", this.state);
    this.props.huel_data_ts();
  }

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

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    let value = event.currentTarget.value;
    let name = event.currentTarget.name;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    this.setState({
      ...this.state,
      submitted: true,
      calories: 80
    });
    this.props.submitFormData(this.state);
  };

  handleClear = (event: React.MouseEvent<HTMLElement>): void => {
    let resetState = {
      powder: "Please select",
      boost: "Please select",
      scoops: 0,
      portions: 0,
      boostNumber: 0,
      submitted: false,
      calories: 0
    };
    event.preventDefault();
    this.setState(resetState);
    this.props.submitFormData(resetState);
  };

  render() {
    return (
      <div style={styles}>
        <form>
          <div className="form">
            <p style={field}> Please enter your powder: </p>
            <select
              name="powder"
              style={field}
              onChange={this.handleChange}
              value={`${this.state.powder}`}
            >
              <option defaultValue="Select powder">Select powder:</option>
              {this.powdersList(this.props.powders)}
            </select>
            <p>{`${this.state.powder}`}</p>

            <p style={field}> Please enter the number of scoops:</p>
            <select
              style={field}
              name="scoops"
              value={`${this.state.scoops}`}
              onChange={this.handleChange}
            >
              <option defaultValue="Please enter number of scoops">
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
              value={`${this.state.portions}`}
              onChange={this.handleChange}
            >
              {this.enumList([0, 1, 2, 3, 4, 5])}
            </select>
            <p style={field}> Please enter the number of boosts:</p>
            <div>
              <select
                name="boost"
                style={field}
                value={`${this.state.boost}`}
                onChange={this.handleChange}
              >
                <option defaultValue="Select boost">Select boost:</option>
                {this.boostsList(this.props.boosts)}
              </select>
              <button style={{ marginLeft: "20px" }} type="button">
                Add boost?
              </button>
            </div>
            <button
              style={{ marginTop: "30px" }}
              type="button"
              onClick={this.handleSubmit}
            >
              Submit
            </button>

            <button
              style={{ marginTop: "30px" }}
              type="button"
              onClick={this.handleClear}
            >
              Reset
            </button>
            {this.state.submitted === true && <div> SUBMITTED </div>}
          </div>
        </form>
        <h1> Your calories : {`${this.state.calories}`}</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  // getHuelData: () => dispatch(getHuelData()),
  // submitFormData: (data: IFormData) => dispatch(submitFormData(data)),
  // // fetchHuelDataEpic: () => dispatch(fetchHuelDataEpic())
  // huel_data_ts: () => dispatch(huel_data_ts())
});

const mapStateToProps = (state: any) => ({
  // formData: state.formData,
  // boosts: state.hueldata.boosts,
  // powders: state.hueldata.powders
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);

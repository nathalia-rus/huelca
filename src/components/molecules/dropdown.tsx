import * as React from "react";
import { IHuelDataProps } from "../../redux/interface";
import "./styles.css";
import { IPowder, IBoost } from "../../redux/interface";
import { connect } from "react-redux";
import { getHuelData } from "../../redux/actions/actions";

const styles = {
  width: "200px"
};
const boostsList = (list: IBoost[]) => {
  if (list.length > 0) {
    return list.map((i: IBoost, index: any) => {
      return <option value={`${index}`}>{`${i.flavour}`}</option>;
    });
  }
};

const powdersList = (list: IPowder[]) => {
  if (list.length > 0) {
    return list.map((i: IPowder, index: any) => {
      return <option value={`${index}`}>{`${i.flavour}`}</option>;
    });
  }
};

const enumList = (list: Number[]) => {
  if (list.length > 0) {
    return list.map((i: Number, index: any) => {
      return <option value={`${index}`}>{`${i}`}</option>;
    });
  }
};

const Dropdown: React.SFC<IHuelDataProps> = props => (
  <div style={styles} className="dropdown">
    <select>
      <option value="0">Select powder:</option>
      {powdersList(props.powders)}
    </select>

    <select>
      <option value="0">Number of scoops per portion (meal):</option>
      {enumList([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7])}
    </select>

    <select>
      <option value="0">Number of portions (meals):</option>
      {enumList([1, 2, 3, 4, 5])}
    </select>

    <select>
      <option value="0">Select boost:</option>
      {boostsList(props.boosts)}
    </select>
    <button type="button"> Add boost</button>
  </div>
);

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

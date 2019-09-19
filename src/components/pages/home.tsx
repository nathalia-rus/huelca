import React from "react";

// import Button from "../atoms/button";
import { getHuelData } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { IAppProps, IAppState, IBoost, IPowder } from "../../redux/interface";

export class HomePage extends React.Component<IAppProps, IAppState> {
  state = {
    isLoading: false
  };

  renderBoosts = (list: IBoost[]) => {
    if (list.length > 0) {
      return list.map((i: IBoost, index: any) => {
        return <div key={index}>{i.flavour}</div>;
      });
    }
  };

  renderPowders = (list: IPowder[]) => {
    if (list.length > 0) {
      return list.map((i: IPowder, index: any) => {
        return <div key={index}>{i.flavour}</div>;
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>
          This website allows you to create todos and keep track of your to-do
          list :) :)
        </p>
        {console.log(this.props.huelData)}
        <button type="button" onClick={() => this.props.getHuelData()}>
          Test redux action
        </button>

        <p> Those are your to powders :</p>
        {this.renderPowders(this.props.huelData.powders)}

        <p> Those are your to boosts :</p>
        {this.renderBoosts(this.props.huelData.boosts)}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  huelData: state.huelData
});

const mapDispatchToProps = (dispatch: Function) => ({
  getHuelData: () => dispatch(getHuelData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

// const HomePage = () => (
//   <div>
//     <h1>Home Page</h1>
//     <Button> Submit </Button>
//     <p>
//       This website allows you to create tasks and keep track of your to-do list
//       :) :)
//     </p>
//   </div>
// );

// export default HomePage;

import { getHuelDataSuccess } from "./actioncreators";
import { IGetHuelDataSuccessAction } from "./actionTypes";
import data from "../hueldata.json";

export const getHuelData = () => {
  return (dispatch: (arg0: IGetHuelDataSuccessAction) => void) => {
    const response = data;
    if (response.status === 200) {
      dispatch(getHuelDataSuccess(data.powders, data.boosts));
    } else {
      console.log("there's been an error");
      // dispatch error action
    }
  };
};

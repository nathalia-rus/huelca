import { getHuelDataSuccess, submitFormDataSuccess } from "./actioncreators";
import {
  IGetHuelDataSuccessAction,
  ISubmitFormDataSuccessAction
} from "./actionTypes";
import data from "../hueldata.json";
import { IFormData } from "../interface";

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

export const submitFormData = (data: IFormData) => {
  return (dispatch: (arg0: ISubmitFormDataSuccessAction) => void) => {
    dispatch(submitFormDataSuccess(data));
  };
};

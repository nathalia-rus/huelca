import {
  SUBMIT_FORM_DATA_SUCCESS,
  formDataActionTypes
} from "../actions/actionTypes";

import { IFormData } from "../interface";

const initialState: IFormData = {
  powder: "Please select",
  boost: "Please select",
  scoops: 0,
  portions: 0,
  boostNumber: 0,
  submitted: false,
  calories: 0
};

export function formDataReducer(
  state = initialState,
  action: formDataActionTypes
): IFormData {
  switch (action.type) {
    case SUBMIT_FORM_DATA_SUCCESS:
      return {
        powder: action.data.powder,
        boost: action.data.boost,
        scoops: action.data.scoops,
        portions: action.data.portions,
        boostNumber: action.data.boostNumber,
        submitted: action.data.submitted,
        calories: action.data.calories
      };

    default:
      return state;
  }
}

export default formDataReducer;

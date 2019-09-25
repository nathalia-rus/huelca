import { IPowder, IBoost, IFormData } from "../../interface";

import {
  GET_HUEL_DATA_SUCCESS,
  IGetHuelDataSuccessAction,
  ISubmitFormDataSuccessAction,
  SUBMIT_FORM_DATA_SUCCESS
} from "./actionTypes";

// actions creators

export function getHuelDataSuccess(
  powders: IPowder[],
  boosts: IBoost[]
): IGetHuelDataSuccessAction {
  return {
    type: GET_HUEL_DATA_SUCCESS,
    powders: powders,
    boosts: boosts
  };
}

// actions creators

export function submitFormDataSuccess(
  data: IFormData
): ISubmitFormDataSuccessAction {
  return {
    type: SUBMIT_FORM_DATA_SUCCESS,
    data: data
  };
}

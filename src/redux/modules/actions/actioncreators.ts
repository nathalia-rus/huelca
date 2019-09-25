import { IPowder, IBoost, IFormData } from "../../interface";

import {
  GET_HUEL_DATA_SUCCESS,
  IGetHuelDataSuccessAction,
  ISubmitFormDataSuccessAction,
  SUBMIT_FORM_DATA_SUCCESS,
  FETCH_HUEL_DATA_EPIC,
  FETCH_HUEL_DATA_EPIC_SUCCESS,
  FETCH_HUEL_DATA_EPIC_ERROR,
  IFetchHuelDataEpicError,
  IFetchHuelDataEpicSuccess,
  IFetchHuelDataEpic
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

export function fetchHuelDataEpic(): IFetchHuelDataEpic {
  return {
    type: FETCH_HUEL_DATA_EPIC
  };
}

export function fetchHuelDataEpicError(error: any): IFetchHuelDataEpicError {
  return {
    type: FETCH_HUEL_DATA_EPIC_ERROR,
    error: error
  };
}

export function fetchHuelDataEpicSuccess(
  powders: IPowder[],
  boosts: IBoost[]
): IFetchHuelDataEpicSuccess {
  return {
    type: FETCH_HUEL_DATA_EPIC_SUCCESS,
    powders: powders,
    boosts: boosts
  };
}

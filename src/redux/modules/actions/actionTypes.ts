import { IPowder, IBoost, IFormData } from "../../interface";

export const GET_HUEL_DATA_SUCCESS = "GET_HUEL_DATA_SUCCESS";
export const SUBMIT_FORM_DATA_SUCCESS = "SUBMIT_FORM_DATA_SUCCESS";
// epic types
export const FETCH_HUEL_DATA_EPIC = "FETCH_HUEL_DATA_EPIC";
export const FETCH_HUEL_DATA_EPIC_SUCCESS = "FETCH_HUEL_DATA_EPIC_SUCCESS";
export const FETCH_HUEL_DATA_EPIC_ERROR = "FETCH_HUEL_DATA_EPIC_ERROR";

// action creator interfaces

export interface IGetHuelDataSuccessAction {
  type: typeof GET_HUEL_DATA_SUCCESS;
  powders: IPowder[];
  boosts: IBoost[];
}

export interface ISubmitFormDataSuccessAction {
  type: typeof SUBMIT_FORM_DATA_SUCCESS;
  data: IFormData;
}

// EPIC ACTIONS

export interface IFetchHuelDataEpic {
  type: typeof FETCH_HUEL_DATA_EPIC;
}

export interface IFetchHuelDataEpicSuccess {
  type: typeof FETCH_HUEL_DATA_EPIC_SUCCESS;
  powders: IPowder[];
  boosts: IBoost[];
}

export interface IFetchHuelDataEpicError {
  type: typeof FETCH_HUEL_DATA_EPIC_ERROR;
  error: any;
}

// useful when more than like 10 actions for the store::

export type huelDataActionTypes = IGetHuelDataSuccessAction;

export type formDataActionTypes = ISubmitFormDataSuccessAction;

export type EpicActionTypes =
  | IFetchHuelDataEpic
  | IFetchHuelDataEpicError
  | IFetchHuelDataEpicSuccess;

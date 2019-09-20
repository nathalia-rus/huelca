import { IPowder, IBoost, IFormData } from "../interface";

export const GET_HUEL_DATA_SUCCESS = "GET_HUEL_DATA_SUCCESS";

export const SUBMIT_FORM_DATA_SUCCESS = "SUBMIT_FORM_DATA_SUCCESS";

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

// cen be useful for the store:

export type huelDataActionTypes = IGetHuelDataSuccessAction;

// cen be useful for the store:

export type formDataActionTypes = ISubmitFormDataSuccessAction;

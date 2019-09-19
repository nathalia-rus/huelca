import { IPowder, IBoost } from "../interface";

export const GET_HUEL_DATA_SUCCESS = "GET_HUEL_DATA_SUCCESS";

// action creator interfaces

export interface IGetHuelDataSuccessAction {
  type: typeof GET_HUEL_DATA_SUCCESS;
  powders: IPowder[];
  boosts: IBoost[];
}

// cen be useful for the store:

export type huelDataActionTypes = IGetHuelDataSuccessAction;

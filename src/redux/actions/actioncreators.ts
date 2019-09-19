import { IPowder, IBoost } from "../interface";

import {
  GET_HUEL_DATA_SUCCESS,
  IGetHuelDataSuccessAction
} from "./actionTypes";

// acctions creators

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

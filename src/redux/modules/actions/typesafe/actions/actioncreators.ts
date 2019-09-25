import { createAction } from "typesafe-actions";
import { IBoost, IPowder } from "../../../../interface";

import {
  HUEL_DATA_TS,
  HUEL_DATA_TS_SUCCESS,
  HUEL_DATA_TS_ERROR
} from "./constants";

export const huel_data_ts_success = createAction(
  HUEL_DATA_TS_SUCCESS,
  action => {
    return (powders: IPowder[], boosts: IBoost[]) =>
      action({
        powders: powders,
        boosts: boosts
      });
  }
);

export const huel_data_ts = createAction(HUEL_DATA_TS);

export const huel_data_ts_error = createAction(HUEL_DATA_TS_ERROR, action => {
  return (error: any) =>
    action({
      error: error
    });
});

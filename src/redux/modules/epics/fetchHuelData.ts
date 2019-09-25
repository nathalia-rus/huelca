import { mapTo } from "rxjs/operators";
import "rxjs/add/observable/of";
import { mergeMap } from "rxjs/operators";
import { ofType, Epic } from "redux-observable";
import { Observable } from "rxjs/Observable";
import data from "../../hueldata.json";

import { isOfType } from "typesafe-actions";

import { EpicActionTypes } from "../actions/actionTypes";

import {
  FETCH_HUEL_DATA_EPIC_SUCCESS,
  FETCH_HUEL_DATA_EPIC
} from "../actions/actionTypes";
import { fetchHuelDataEpicError } from "../actions/actioncreators";

export const fetchHuelDataEpic = (action$: EpicActionTypes<>) => {
  const response = data;
  if ((response.status = 200)) {
    return action$.pipe(
      ofType(FETCH_HUEL_DATA_EPIC),
      mergeMap((): any => {
        mapTo({
          type: FETCH_HUEL_DATA_EPIC_SUCCESS,
          powders: response.powders,
          boosts: response.boosts
        });
      })
    );
  } else {
    return Observable.of(fetchHuelDataEpicError("there's been an error"));
  }
};

import { mapTo } from "rxjs/operators";
import "rxjs/add/observable/of";
import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Observable } from "rxjs/Observable";
import data from "../../hueldata.json";
import {
  FETCH_HUEL_DATA_EPIC_SUCCESS,
  FETCH_HUEL_DATA_EPIC
} from "../actions/actionTypes";
import { fetchHuelDataEpicError } from "../actions/actioncreators";

export const fetchHuelDataEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_HUEL_DATA_EPIC),
    mergeMap(() => {
      const response = data;
      mapTo({
        type: FETCH_HUEL_DATA_EPIC_SUCCESS,
        powders: response.powders,
        boosts: response.boosts
      }).catch(err => {
        return Observable.of(fetchHuelDataEpicError(err));
      });
    })
  );
};

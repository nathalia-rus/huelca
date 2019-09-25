import { mapTo } from "rxjs/operators";
import "rxjs/add/observable/of";
import { Observable } from "rxjs/Observable";
import data from "../../hueldata.json";
import {
  FETCH_HUEL_DATA_EPIC_SUCCESS,
  FETCH_HUEL_DATA_EPIC
} from "../actions/actionTypes";
import { fetchHuelDataEpicError } from "../actions/actions";

const fetchHuelDataEpic = action$ =>
  action$.ofType(FETCH_HUEL_DATA_EPIC).mergeMap(() => {
    const response = data;
    if (response.statys === 200) {
      mapTo({
        type: FETCH_HUEL_DATA_EPIC_SUCCESS,
        powders: response.powders,
        boosts: response.boosts
      }).catch(err => {
        return Observable.of(fetchHuelDataEpicError(err));
      });
    } else {
      console.log("there's been a request error");
      return Observable.of(fetchHuelDataEpicError("there's been an error"));
    }
  });

export default fetchHuelDataEpic;

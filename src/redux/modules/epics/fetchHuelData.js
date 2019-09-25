// const fetchTodos = action$ =>
//   action$.ofType(TODOS_FETCH_REQUEST).mergeMap(() =>
//     ajax
//       .getJSON("http://localhost:3001/todos")
//       .map(response => ({ type: TODOS_FETCH_SUCCESS, payload: response }))
//       .catch(createErrorAction("Failed to fetch tasks"))
//   );
import { mapTo } from "rxjs/operators";
import "rxjs/add/observable/of";
import { Observable } from "rxjs/Observable";
import data from "../../hueldata.json";
import { FETCH_HUEL_DATA_EPIC } from "../actions/actionTypes";

const fetchHuelDataEpic = action$ =>
  action$.ofType(FETCH_HUEL_DATA_EPIC).mergeMap(() => {
    const response = data;
    if (response.statys === 200) {
      mapTo({
        type: FETCH_HUEL_DATA_EPIC,
        powders: response.powders,
        boosts: response.boosts
      }).catch(err => {
        return Observable.of(searchBeersError(err));
      });
    } else {
      console.log("there's been a request error");
      // dispatch error action
    }
  });

export default fetchHuelDataEpic;

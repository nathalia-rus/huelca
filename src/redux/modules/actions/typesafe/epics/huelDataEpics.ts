import { IHueldata } from "../../../../interface";
import { Epic } from "redux-observable";
import { of } from "rxjs";
import { switchMap, filter, catchError } from "rxjs/operators";
import { ActionType, isActionOf } from "typesafe-actions";
import * as actions from "../actions/actioncreators";
import data from "../../../../hueldata.json";

type Action = ActionType<typeof actions>;

const fetchHuelDataEpicTS: Epic<Action, Action, IHueldata> = (action$, store) =>
  action$.pipe(
    filter(
      isActionOf(actions.huel_data_ts),
      switchMap(
        action => of(actions.huel_data_ts_success(data.powders, data.boosts)),
        catchError(error => of(actions.huel_data_ts_error("error")))
      )
    )
  );

export default [fetchHuelDataEpicTS];

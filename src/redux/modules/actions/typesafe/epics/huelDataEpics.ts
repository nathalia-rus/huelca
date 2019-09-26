import { IHueldata } from "../../../../interface";
import { Epic } from "redux-observable";
import { of, Observable, from } from "rxjs";
import { ajax } from "rxjs/observable/dom/ajax";
import {
  switchMap,
  switchAll,
  filter,
  catchError,
  mergeMap,
  concat,
  map,
  tap
} from "rxjs/operators";
import { ActionType, isActionOf } from "typesafe-actions";
import * as actions from "../actions/actioncreators";
import data from "../../../../hueldata.json";
import { huel_data_ts_success } from "../actions/actioncreators";
import { getHuelDataApi } from "../service/api";

type Action = ActionType<typeof actions>;

const fetchHuelDataEpicTS: Epic<Action, Action, IHueldata> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(actions.huel_data_ts)),

    catchError(error => of(actions.huel_data_ts_error(error)))
  );

export default [fetchHuelDataEpicTS];

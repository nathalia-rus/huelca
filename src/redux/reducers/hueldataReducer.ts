import {
  GET_HUEL_DATA_SUCCESS,
  huelDataActionTypes,
  EpicActionTypes,
  FETCH_HUEL_DATA_EPIC,
  FETCH_HUEL_DATA_EPIC_ERROR,
  FETCH_HUEL_DATA_EPIC_SUCCESS
} from "../modules/actions/actionTypes";

import * as actions from "../modules/actions/typesafe/actions/actioncreators";

import { IHueldata } from "../interface";
import { ActionType, getType } from "typesafe-actions";

type Action = ActionType<typeof actions>;

export const initialState: IHueldata = {
  powders: [],
  boosts: [],
  loading: false,
  error: null
};

export function huelTsdata(state = initialState, action: Action): IHueldata {
  switch (action.type) {
    case getType(actions.huel_data_ts):
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case getType(actions.huel_data_ts_error):
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error
      });
    case getType(actions.huel_data_ts_success):
      return Object.assign({}, state, {
        powders: action.payload.powders,
        boosts: action.payload.boosts,
        loading: false,
        error: null
      });
    default:
      return state;
  }
}

export function hueldata(
  state = initialState,
  action: huelDataActionTypes | EpicActionTypes
): IHueldata {
  switch (action.type) {
    // action from redux-thunk:
    case GET_HUEL_DATA_SUCCESS:
      return {
        powders: action.powders.map(powderdata => powderdata),
        boosts: action.boosts.map(boostdata => boostdata),
        loading: false,
        error: null
      };
    // action from redux-observable:
    case FETCH_HUEL_DATA_EPIC:
      return {
        powders: [],
        boosts: [],
        loading: true,
        error: null
      };

    case FETCH_HUEL_DATA_EPIC_ERROR:
      return {
        powders: [],
        boosts: [],
        loading: false,
        error: action.error
      };

    case FETCH_HUEL_DATA_EPIC_SUCCESS:
      return {
        powders: action.powders.map(powderdata => powderdata),
        boosts: action.boosts.map(boostdata => boostdata),
        loading: false,
        error: null
      };

    default:
      return state;
  }
}

export default hueldata;

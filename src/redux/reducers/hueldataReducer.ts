import {
  GET_HUEL_DATA_SUCCESS,
  huelDataActionTypes,
  EpicActionTypes,
  FETCH_HUEL_DATA_EPIC,
  FETCH_HUEL_DATA_EPIC_ERROR,
  FETCH_HUEL_DATA_EPIC_SUCCESS
} from "../modules/actions/actionTypes";

import { IHueldata } from "../interface";

export const initialState: IHueldata = {
  powders: [],
  boosts: [],
  loading: false,
  error: null
};

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

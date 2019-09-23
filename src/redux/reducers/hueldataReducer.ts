import {
  GET_HUEL_DATA_SUCCESS,
  huelDataActionTypes
} from "../actions/actionTypes";

import { IHueldata } from "../interface";

const initialState: IHueldata = {
  powders: [],
  boosts: []
};

export function hueldata(
  state = initialState,
  action: huelDataActionTypes
): IHueldata {
  switch (action.type) {
    case GET_HUEL_DATA_SUCCESS:
      return {
        powders: action.powders.map(powderdata => powderdata),
        boosts: action.boosts.map(boostdata => boostdata)
      };

    default:
      return state;
  }
}

export default hueldata;

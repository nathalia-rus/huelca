import { GET_HUEL_DATA_SUCCESS, todoActionTypes } from "../actions/actionTypes";

import { IHueldata } from "../interface";

const initialState: IHueldata = {
  powders: [],
  boosts: []
};

export function hueldataReducer(
  state = initialState,
  action: todoActionTypes
): IHueldata {
  switch (action.type) {
    case GET_HUEL_DATA_SUCCESS:
      return {
        powders: action.powders.map((powderdata: any) => powderdata),
        boosts: action.boosts.map((boostdata: any) => boostdata)
      };

    default:
      return state;
  }
}

export default hueldataReducer;

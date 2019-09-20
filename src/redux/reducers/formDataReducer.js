// import {
//   GET_FORM_DATA_SUCCESS,
//   formDataActionTypes
// } from "../actions/actionTypes";

// import { IFormData } from "../interface";

// const initialState: IFormData = {
//   powder: "Please select",
//   boost: "Please select",
//   scoops: 0,
//   portions: 0,
//   boostNumber: 0,
//   submitted: false,
//   calories: 0
// };

// export function formDataReducer(
//   state = initialState,
//   action: formDataActionTypes
// ): IFormData {
//   switch (action.type) {
//     case GET_FORM_DATA_SUCCESS:
//       return {
//         powders: action.powders.map(powderdata => powderdata),
//         boosts: action.boosts.map(boostdata => boostdata)
//       };

//     default:
//       return state;
//   }
// }

// export default hueldataReducer;

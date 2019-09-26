import { fetchHuelDataEpic } from "./fetchHuelData";
import { combineEpics } from "redux-observable";

export const epics = combineEpics(fetchHuelDataEpic);

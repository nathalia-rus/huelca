import { IBoost, IPowder } from "../../redux/interface";
import * as React from "react";

export const boostsList = (list: IBoost[]) => {
  if (list.length > 0) {
    return list.map((i: IBoost, index: any) => {
      return <div key={index}>{i.flavour}</div>;
    });
  }
};

export const powdersList = (list: IPowder[]) => {
  if (list.length > 0) {
    return list.map((i: IPowder, index: any) => {
      return <div key={index}>{i.flavour}</div>;
    });
  }
};

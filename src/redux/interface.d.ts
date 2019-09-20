// single huel powder object

export interface IPowder {
  id: String;
  flavour: String;
  scoopcalories: Number;
  rating: null | Number;
  gluten: null | Boolean;
}

// single huel boost object

export interface IBoost {
  id: String;
  flavour: String;
  portioncalories: Number;
  rating: null | Number;
  gluten: null | Boolean;
}

// entire Hueldata object

export interface IHueldata {
  powders: IPowder[];
  boosts: IBoost[];
}

// HuelDataProps

export interface IHuelDataProps {
  powders: IPowder[];
  boosts: IBoost[];
  getHuelData: () => Promise<any>;
}

// form data object props

export interface IFormData {
  powder: String;
  boost: String;
  scoops: number;
  portions: number;
  boostNumber: number;
  submitted: boolean;
  calories: number;
}

// AppState

export interface IAppState {
  isLoading: boolean;
}

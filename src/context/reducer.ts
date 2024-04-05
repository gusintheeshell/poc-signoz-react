import { AppAction, AppState } from "./action";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_CARD_TYPE":
      return { ...state, cardType: action.payload };
    default:
      return state;
  }
};

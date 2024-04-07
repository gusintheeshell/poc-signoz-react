import { AppAction, AppState } from "./action";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_CARD_TYPE":
      return { ...state, cardType: action.payload };
    case "SET_PAGE_NUMBER":
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
};

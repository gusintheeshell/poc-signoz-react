import { CardTypes } from "@/types";

export type AppState = {
  cardType: CardTypes | null;
  pageNumber: number;
};

export const SET_CARD_TYPE = "SET_CARD_TYPE";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
export const SET_PAGE_RESET = "SET_PAGE_RESET";

export type AppAction =
  | {
      type: typeof SET_CARD_TYPE;
      payload: AppState["cardType"];
    }
  | { type: typeof SET_PAGE_NUMBER; payload: AppState["pageNumber"] }
  | { type: typeof SET_PAGE_RESET; payload?: AppState["pageNumber"] };

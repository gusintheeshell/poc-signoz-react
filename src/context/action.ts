import { CardTypes } from "@/types";

export type AppState = {
  cardType: CardTypes;
};

export const SET_CARD_TYPE = "SET_CARD_TYPE";

export type AppAction = {
  type: typeof SET_CARD_TYPE;
  payload: AppState["cardType"];
};

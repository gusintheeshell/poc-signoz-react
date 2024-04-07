import { createContext, Dispatch, FC, useContext, useReducer } from "react";
import { AppAction, AppState } from "./action";
import { appReducer } from "./reducer";

interface AppProviderProps {
  children: JSX.Element;
}

const AppContext = createContext<
  { state: AppState; dispatch: Dispatch<AppAction> } | undefined
>(undefined);

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    cardType: null,
    pageNumber: 1,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <>{children}</>
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context not defined");
  }

  return context;
};

export { AppProvider, useApp };

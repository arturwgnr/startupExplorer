import { createContext, useReducer, useContext } from "react";
import { ReactNode } from "react";


interface Startup {
  id: string;
  name: string;
  tagline: string;
  category: string;
  url: string;
};

interface StartupState {
  favourites: Startup [];
}

type StartupAction = {type: "ADD_FAV"; payload: Startup} | {type: "REMOVE_FAV"; payload: string}

function startupReducer(state: StartupState, action: StartupAction): StartupState {

 switch(action.type) {
  case "ADD_FAV":
    return (
      {
        ...state, favourites: [...state.favourites, action.payload]
      }
    )

    case "REMOVE_FAV":
      return ({
        ...state, favourites: state.favourites.filter((s) => s.id !== action.payload)
      })

      default:
        return state
 }

}

const initialState: StartupState = {
  favourites: []
}

//cria o contexto e cria o provider

const StartupContext = createContext<{
  state: StartupState;
  dispatch: React.Dispatch<StartupAction>;
} | undefined>(undefined);

export function StartupProvider({children} : {children: ReactNode}) {

const [state, dispatch] = useReducer(startupReducer, initialState);

return (
  <StartupContext.Provider value={{state, dispatch}}>{children}</StartupContext.Provider>
)
}

export function useStartups() {
  const context = useContext(StartupContext);
  if (!context) {
    throw new Error("useStartups must be used within a StartupProvider");
  }
  return context;
}



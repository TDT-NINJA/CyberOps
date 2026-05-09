import {createContext, useContext, useReducer} from "react";
import {InitialImplants} from "../datas/temporaryImplantsDatas.ts";
import type {
    ActionImplant,
    StateImplant,
    ImplantContextValue,
    ImplantProviderProps
} from "../types/implants.ts";

// initialState du reducer
const initialState : StateImplant = {
    implants : InitialImplants,
    loading: false,
    error: false
}

const ImplantContext = createContext<ImplantContextValue | null>(null);

// le reducer regroupant les actions a effectuer sur les implants
//TODO implementer les fonctionnalité API et les vrai actions
function ImplantReducer (state: StateImplant, action: ActionImplant) : StateImplant {
    console.log(state, action);
    switch (action.type) {
        case "ADD_IMPLANT" :
            return state
        case "REMOVE_IMPLANT":
            return state
        default:
            return state
    }
}

// Provider que l'on appelle pour englobé une partie de l'app
export function ImplantProvider ({children} : ImplantProviderProps) {
    const [state, dispatch] = useReducer(ImplantReducer, initialState)
    return (
        <ImplantContext.Provider
            value={{state, dispatch}}
        >
            {children}
        </ImplantContext.Provider>
    )
}

// le hook personaliser qui va nous servir a utiliser le reducer
export function useImplants() {
    const ctx = useContext(ImplantContext);
    if (!ctx) {
        throw new Error("useImplants doit être utilisé dans un ImplantProvider");
    }
    return ctx;
}
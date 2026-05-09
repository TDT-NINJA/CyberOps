import type {ReactNode} from "react";

export type Implant = {
    id: string;
    name : string,
    rarity: string,
    cost: number,
    slot: string,
    energy: number,
    manufacturer : string,
}

export type ImplantProviderProps  = {
    children: ReactNode
}

export type ActionImplant =
    | { type: "ADD_IMPLANT"; payload: Implant }
    | { type: "REMOVE_IMPLANT"; payload: { id: string } };

export type ImplantContextValue = {
    state: StateImplant;
    dispatch: React.Dispatch<ActionImplant>;
};

export type StateImplant = {
    implants: Implant[],
    loading: boolean,
    error: boolean
}
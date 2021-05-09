import { Achat } from "src/app/core/models/achats.model";
import { AchatsActions, LOAD_ACHATS } from "../actions/achats.actions";

export interface AchatsState {
    achats: Achat[]
}

export const initialState = {
    achats: []
}

export const achatReducer = (state = initialState, action: AchatsActions) => {
    switch(action.type){
        case LOAD_ACHATS:
            return {...state, achats: action.payload}
        default:
            return state;
    }
}
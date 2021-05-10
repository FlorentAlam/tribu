import { Achat } from "src/app/core/models/achats.model";
import { AchatsActions, AddCategory, ADD_CATEGORY, LOAD_ACHATS } from "../actions/achats.actions";

export interface AchatsState {
    achats: Achat[]
}

export const initialState = {
    achats: []
}

export const achatReducer = (state = initialState, action: AchatsActions) => {
    switch(action.type){
        case LOAD_ACHATS:
            return {...state, achats: action.payload};
        case ADD_CATEGORY:
            // console.log(action);
            const { payload } = (action as AddCategory);
            // console.log(payload);
            return {...state, achats: [...state.achats, new Achat(payload, [])]}
        default:
            return state;
    }
}
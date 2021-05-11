import { Achat } from "src/app/core/models/achats.model";
import { AchatsActions, AddCategory, AddItem, ADD_CATEGORY, ADD_ITEM, LoadAchats, LOAD_ACHATS } from "../actions/achats.actions";

export interface AchatsState {
    achats: Achat[]
}

export const initialState: AchatsState = {
    achats: []
}

export const achatReducer = (state = initialState, action: AchatsActions) => {
    switch(action.type){
        case LOAD_ACHATS:
            return {...state, achats: (action as LoadAchats).payload};
        case ADD_CATEGORY:
            const { payload } = (action as AddCategory);
            return {...state, achats: [...state.achats, new Achat(payload, [], 2)]}
        case ADD_ITEM:
            const { item, cat_id } = (action as AddItem);
            return {...state, achats: state.achats.map(achat => {
                if(achat.id === cat_id){
                    return {...achat, items: [...achat.items, item]}
                } else return achat;
            })}
        default:
            return state;
    }
}
import { Action, ActionReducer } from "@ngrx/store";
import { achatReducer, AchatsState } from "./reducers/achats.reducer";

export interface AppStateType{
    achats: AchatsState
}

export const AppState = 
{
    achats: (achatReducer as ActionReducer<AchatsState, Action>)
}
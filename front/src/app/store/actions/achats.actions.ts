import { Action } from "@ngrx/store";
import { Achat } from "src/app/core/models/achats.model";

export const LOAD_ACHATS = '[Achats] Load achats';

export class LoadAchats implements Action{
    readonly type: string = LOAD_ACHATS
    constructor(public payload: Achat[]){}
}

export type AchatsActions = LoadAchats;
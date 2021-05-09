import { Action } from "@ngrx/store";
import { Achat } from "src/app/core/models/achats.model";
import { AddCategoryComponent } from "src/app/pages/achats/components/addCategory/addCategory.component";

export const LOAD_ACHATS = '[Achats] Load achats';
export const LOAD_ACHATS_START = '[Achats] Load achats start';
export const ADD_CATEGORY = '[Achats] Add category';
export const ADD_CATEGORY_START = '[Achats] Add category start';

export class LoadAchatsStart implements Action{
    readonly type: string = LOAD_ACHATS_START;
}
export class AddCategoryStart implements Action{
    readonly type: string = ADD_CATEGORY_START;
    constructor(public payload: string){}
}

export class LoadAchats implements Action{
    readonly type: string = LOAD_ACHATS
    constructor(public payload: Achat[]){}
}
export class AddCategory implements Action{
    readonly type: string = ADD_CATEGORY;
    constructor(public payload: Achat){}
}

export type AchatsActions = LoadAchats | AddCategory;
import { Action } from "@ngrx/store";
import { Achat, AchatItem } from "src/app/core/models/achats.model";
import { AddCategoryComponent } from "src/app/pages/achats/components/addCategory/addCategory.component";

export const LOAD_ACHATS = '[Achats] Load achats';
export const LOAD_ACHATS_START = '[Achats] Load achats start';
export const ADD_CATEGORY = '[Achats] Add category';
export const ADD_CATEGORY_START = '[Achats] Add category start';
export const ADD_ITEM = '[Achats] Add item';
export const ADD_ITEM_START = '[Achats] Add item start';

export class LoadAchatsStart implements Action{
    readonly type: string = LOAD_ACHATS_START;
}
export class AddCategoryStart implements Action{
    readonly type: string = ADD_CATEGORY_START;
    constructor(public payload: string){ }
}
export class AddItemStart implements Action{
    readonly type: string = ADD_ITEM_START;
    constructor(public cat_id: number, public name: string, public quantity: string){}
}

export class LoadAchats implements Action{
    readonly type: string = LOAD_ACHATS
    constructor(public payload: Achat[]){}
}
export class AddCategory implements Action{
    readonly type: string = ADD_CATEGORY;
    constructor(public payload: string){}
}
export class AddItem implements Action{
    readonly type: string = ADD_ITEM;
    constructor(public item: AchatItem, public cat_id: number){}
}

export type AchatsActions = LoadAchats | AddCategory | AddItem;
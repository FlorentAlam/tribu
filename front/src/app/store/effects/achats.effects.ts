import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Achat } from "src/app/core/models/achats.model";
import { AchatService } from "src/app/core/services/achats.service";
import { ADD_CATEGORY, ADD_CATEGORY_START, LOAD_ACHATS, LOAD_ACHATS_START } from "../actions/achats.actions";

@Injectable()
export class AchatsEffects{
    loadAchats$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(LOAD_ACHATS_START),
            mergeMap(() => {
                return this._achats.getAchats().pipe(
                    map((achats: Achat[]) => ({type: LOAD_ACHATS, payload: achats})),
                    catchError(() => {
                        return EMPTY
                    })
                )
            })
        );
    });

    addCategory$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(ADD_CATEGORY_START),
            mergeMap((actionData: {payload: string}) => {
                return this._achats.addCategory(actionData.payload).pipe(
                    map((name: string) => ({type: ADD_CATEGORY, payload: name})),
                    catchError(() => {
                        return EMPTY
                    })
                )
            })
        )
    })

    constructor(private _actions$: Actions, private _achats: AchatService){}
}
import { Component, OnDestroy, OnInit } from "@angular/core";
import { AchatService } from "src/app/core/services/achats.service";
import { map, filter, tap, takeUntil, take } from 'rxjs/operators'
import { Observable, Subject, Subscription } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AchatsState } from "src/app/store/reducers/achats.reducer";
import { LoadAchats } from "src/app/store/actions/achats.actions";
import { Achat } from "src/app/core/models/achats.model";

@Component({
    selector: 'page-achats',
    templateUrl: './achats.component.html',
    styleUrls: ['./achats.component.scss']
})
export class AchatsComponent implements OnInit, OnDestroy{
    private unsubscribe$: Subject<any> = new Subject();

    public achats$: Observable<Achat[]> = this._store.pipe(
        takeUntil(this.unsubscribe$),
        select(state => state.achats.achats)
    );

    constructor(private _achats: AchatService, private _store: Store<{achats: AchatsState}>){}

    ngOnInit(){
        this._achats.getAchats().pipe(take(1)).subscribe(data => {
            this._store.dispatch(new LoadAchats(data));
        });
    }

    ngOnDestroy(){
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
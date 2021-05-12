import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Achat, AchatItem } from "../models/achats.model";
const PORT = '4201';
export const API = 'http://localhost:' + PORT + '/achat'

@Injectable({
    providedIn: 'root'
})
export class AchatService{
    public achats: Achat[] = [
        new Achat("supermarché", [
                {name: 'courgette', quantity: '200gr', id: 0},
                {name: 'raviolis', quantity: '1 boite', id: 1},
                {name: 'saumon', quantity: '2 filets', id: 2}
            ], 0
        )
    ]   

    constructor(private _http: HttpClient){}

    public getAchats(): Observable<Achat[]>{
        return of(this.achats);
    }
    public addCategory(name: string): Observable<string>{
        return of(name)
    }
    public removeItem(id: number): Observable<boolean>{
        return of(true);
    }
    public addItem(itemName: string, cat_id: number, quantity: string): Observable<AchatItem>{
        return this._http.post<AchatItem>(`${API}/item`, {
            name: itemName,
            cat_id,
            quantity
        });
    }
}
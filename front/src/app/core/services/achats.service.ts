import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Achat, AchatItem } from "../models/achats.model";

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
        return of(new AchatItem(itemName, quantity, 3));
    }
}
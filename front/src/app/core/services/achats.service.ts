import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Achat } from "../models/achats.model";

@Injectable({
    providedIn: 'root'
})
export class AchatService{
    public achats: Achat[] = [
        {
            category: "supermarché",
            items: [
                {name: 'courgette', quantity: '200gr'},
                {name: 'raviolis', quantity: '1 boite'},
                {name: 'saumon', quantity: '2 filets'}
            ]
        }
    ]   

    public getAchats(): Observable<Achat[]>{
        return of(this.achats);
    }
}
import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent{
    public error: {activated: boolean, message: string} = {activated: false, message: ''};

    public inscriptionForm: FormGroup = this._fb.group({
        email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
        password: ['', [Validators.required, Validators.minLength(7)]],
        passwordRepeat: ['', [Validators.required, Validators.minLength(7)]]
    });

    constructor(private _fb: FormBuilder){}

    get email() { return this.inscriptionForm.get('email') as AbstractControl;}
    get password() { return this.inscriptionForm.get('password') as AbstractControl;}
    get passwordRepeat() { return this.inscriptionForm.get('passwordRepeat') as AbstractControl;}

    onSubmit() : void {
        if(this.email.errors && this.email.errors.required){
            this.error = {activated: true, message: 'Veuillez renseigner votre adresse email.'}
        } else if(this.email.errors && this.email.errors.email){
            this.error = {activated: true, message: 'Veuillez renseigner une adresse email correcte.'}
        } else if(this.password.errors && this.password.errors.required){
            this.error = {activated: true, message: 'Veuillez renseigner votre mot de passe.'}
        } else if(this.password.errors){
            this.error = {activated: true, message: 'Votre mot de passe doit contenir au moins 7 caractères.'}
        } else {
            this.error = {activated: false, message: ''}
        }
    }
}
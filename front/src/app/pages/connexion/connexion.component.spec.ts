import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { ButtonComponent } from "src/app/core/shared/components/button/button.component";
import { ErrorComponent } from "src/app/core/shared/components/error/error.component";
import { FormInputComponent } from "src/app/core/shared/components/formInput/form-input.component";
import { ConnexionComponent } from "./connexion.component";

describe('[Component] Connexion', () => {
    let fixture: ComponentFixture<ConnexionComponent>;
    let component: ConnexionComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ ReactiveFormsModule ],
            declarations: [ ConnexionComponent, FormInputComponent, ButtonComponent, ErrorComponent ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ConnexionComponent);
        component = fixture.componentInstance;
        fixture.autoDetectChanges(true);
    });

    it('should render email label',() => {
        const label = fixture.debugElement.queryAll(By.css('label'))[0];
        expect(label.nativeElement.textContent).toContain('Adresse email');
    });
    it('should render password label', () => {
        const label = fixture.debugElement.queryAll(By.css('label'))[1];
        expect(label.nativeElement.textContent).toContain('Mot de passe');
    });
    it('should render submit button', () => {
        const button = fixture.debugElement.query(By.css('button'));
        expect(button.nativeElement.textContent).toEqual('Connexion');
    });

    it('should update email input value', () => {
        const input = fixture.debugElement.query(By.css('input[type=text]'));
        expect(input.nativeElement.value).toEqual('');
        
        input.nativeElement.value = "test";
        input.nativeElement.dispatchEvent(new Event('input'));

        expect(component.connexionForm.value.email).toEqual('test');
    });
    it('should update password input value', () => {
        const input = fixture.debugElement.query(By.css('input[type=password]'));
        expect(input.nativeElement.value).toEqual('');
        
        input.nativeElement.value = "test";
        input.nativeElement.dispatchEvent(new Event('input'));

        expect(component.connexionForm.value.password).toEqual('test');
    });
    it('submit button should trigger onSubmit()', () => {
        const button = fixture.debugElement.query(By.css('button'));

        let spy = spyOn(component, 'onSubmit');
        button.nativeElement.click();

        expect(spy).toHaveBeenCalledTimes(1);
    });
    describe('[Errors]', () => {
        let button: HTMLButtonElement;
        let passwordInput: HTMLInputElement;
        let emailInput: HTMLInputElement;

        beforeEach(() => {
            passwordInput = fixture.debugElement.query(By.css('input[type=password]')).nativeElement;
            emailInput = fixture.debugElement.query(By.css('input[type=text]')).nativeElement;
            button = fixture.debugElement.query(By.css('button')).nativeElement;
        });
        it('should not display any error if inputs are filled correctly', () => {
            emailInput.value = 'test@est.com';
            emailInput.dispatchEvent(new Event('input'));

            passwordInput.value = 'testdestom';
            passwordInput.dispatchEvent(new Event('input'));

            button.click();

            const error = fixture.debugElement.query(By.css('.error'));
            expect(error).toBeFalsy();
        });
        it('should display email required error if email not provided', () => {
            expect(emailInput.value).toEqual('');
    
            button.click();
    
            const error = fixture.debugElement.query(By.css('.error'));
            expect(error.nativeElement.textContent).toContain('Veuillez renseigner votre adresse email.');
        });
        it('should display password required error if password not provided', () => {
            emailInput.value = 'test@est.com';
            emailInput.dispatchEvent(new Event('input'));
            
            expect(passwordInput.value).toEqual('');
    
            button.click();
    
            const error = fixture.debugElement.query(By.css('.error'));
            expect(error.nativeElement.textContent).toContain('Veuillez renseigner votre mot de passe.');
        });
        it('should display password length error if < 7', () => {
            emailInput.value = 'test@est.com';
            emailInput.dispatchEvent(new Event('input'));
    
            passwordInput.value = 'test';
            passwordInput.dispatchEvent(new Event('input'));
            
            button.click();
    
            const error = fixture.debugElement.query(By.css('.error'));
            expect(error.nativeElement.textContent).toContain('Votre mot de passe doit contenir au moins 7 caractères.');
        });
        it('should display email error if not proper email', () => {
            emailInput.value = 'testtete';
            emailInput.dispatchEvent(new Event('input'));
    
            button.click();
    
            const error = fixture.debugElement.query(By.css('.error'));
            expect(error.nativeElement.textContent).toContain('Veuillez renseigner une adresse email correcte.');
        });
    });
});
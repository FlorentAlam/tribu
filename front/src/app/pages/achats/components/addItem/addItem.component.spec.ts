import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { AddItemStart } from "src/app/store/actions/achats.actions";
import { AddItemComponent } from "./addItem.component"

describe('[Component] AddItemComponent', () => {
    let component: AddItemComponent;
    let fixture: ComponentFixture<AddItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AddItemComponent
            ],
            imports: [
                StoreModule.forRoot({}),
                FormsModule
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddItemComponent);
        component = fixture.componentInstance;
    });

    describe('[Template]', () => {
        it('should have a form', () => {
            let form = fixture.debugElement.query(By.css('form'));
            expect(form).toBeTruthy();
        });
        it('should have an item input', () => {
            let input = fixture.debugElement.query(By.css('input[name=item]'));
            expect(input).toBeTruthy();
        });
        it('should have a quantity input', () => {
            let input = fixture.debugElement.query(By.css('input[name=quantity]'));
            expect(input).toBeTruthy();
        });
        it('should have a submit input', () => {
            let input = fixture.debugElement.query(By.css('input[type=submit]'));

            expect(input).toBeTruthy();
            expect(input.nativeElement.value).toBe('Ajouter');
        });
        it('should update component.itemName', fakeAsync(() => {
            let input = fixture.debugElement.query(By.css('input[name=item]')).nativeElement;
            
            fixture.detectChanges();
            tick();

            input.value = "test";
            input.dispatchEvent(new Event('input'));
            
            fixture.detectChanges();
            tick();
            expect(component.itemName).toBe("test");           
        }));
        it('should update component.quantity', fakeAsync(() => {
            let input = fixture.debugElement.query(By.css('input[name=quantity]')).nativeElement;
            
            fixture.detectChanges();
            tick();

            input.value = "12gr";
            input.dispatchEvent(new Event('input'));
            
            fixture.detectChanges();
            tick();
            expect(component.quantity).toBe("12gr");           
        }));
        it('should trigger onSubmit on button click', () => {
            let button = fixture.debugElement.query(By.css('input[type=submit]')).nativeElement;
            
            spyOn(component, 'onSubmit');
            button.click();

            expect(component.onSubmit).toHaveBeenCalledTimes(1);          
        });
    })

    describe('isStringLongEnough()', () => {
        it('should return true if value is long enough', () => {
            expect(component['isStringLongEnough']('test')).toBe(true);
        });
        it('should return false if value is not long enough', () => {
            expect(component['isStringLongEnough']('')).toBe(false);
        });
    });
    describe('isItemValid()', () => {
        it('should return true if item is valid', () => {
            component.itemName = "test";
            component.quantity = "12gr";
            expect(component['isItemValid']()).toBe(true);
        });
        it('should return false if item is not valid', () => {
            component.itemName = "";
            component.quantity = "";
            expect(component['isItemValid']()).toBe(false);
        });
        it('should return false if itemName is not valid', () => {
            component.itemName = "";
            component.quantity = "12 gr";
            expect(component['isItemValid']()).toBe(false);
        });
        it('should return false if quantity is not valid', () => {
            component.itemName = "test";
            component.quantity = "";
            expect(component['isItemValid']()).toBe(false);
        });
    });
    describe('checkAndSubmitItemInfos()', () => {
        it('should throw error if item is not valid', () => {
            component.itemName = "test";
            component.quantity = "";
            expect(function(){component['checkAndSubmitItemInfos']()}).toThrowError("Veuillez renseigner le nom ainsi que la quantité de votre article.");
        });
        it('should call addItemToStore() if item is valid', () => {
            component.itemName = "test";
            component.quantity = "12gr";

            spyOn<any>(component, 'addItemToStore');

            component['checkAndSubmitItemInfos']();
            
            expect(component['addItemToStore']).toHaveBeenCalledTimes(1);
        });
        it('should call reinitializeItem() if item is valid', () => {
            component.itemName = "test";
            component.quantity = "12gr";

            spyOn<any>(component, 'reinitializeItem');

            component['checkAndSubmitItemInfos']();
            
            expect(component['reinitializeItem']).toHaveBeenCalledTimes(1);
        });
    });
    describe('onSubmit()', () => {
        it('should call checkAndSubmitItemInfos()', () => {
            component.itemName = "test";
            component.quantity = "12gr";

            spyOn<any>(component, 'checkAndSubmitItemInfos');

            component.onSubmit();

            expect(component['checkAndSubmitItemInfos']).toHaveBeenCalledTimes(1);
        });
        it('should not call handleSubmissionError() if item is valid', () => {
            component.itemName = "test";
            component.quantity = "12gr";

            spyOn<any>(component, 'handleSubmissionError');

            component.onSubmit();

            expect(component['handleSubmissionError']).not.toHaveBeenCalled();
        });
        it('should call handleSubmissionError() if item is not valid', () => {
            component.itemName = "test";
            component.quantity = "";

            spyOn<any>(component, 'handleSubmissionError');

            component.onSubmit();

            expect(component['handleSubmissionError']).toHaveBeenCalledTimes(1);
            expect(component['handleSubmissionError']).toHaveBeenCalledWith(new Error("Veuillez renseigner le nom ainsi que la quantité de votre article."));
        });
    });
    describe('addItemToStore()', () => {
        it('should call dispatch function from store', () => {
            component.cat_id = 0;
            component.itemName = "test";
            component.quantity = "12gr";

            spyOn<any>(component['_store'], 'dispatch');

            component['addItemToStore']();

            expect(component['_store'].dispatch).toHaveBeenCalledTimes(1);
            expect(component['_store'].dispatch).toHaveBeenCalledWith(new AddItemStart(component.cat_id, component.itemName, component.quantity))
        });
    });
    describe('reinitializeItem()', () => {
        it('should reinitialize itemName and quantity', () => {
            component.itemName = "test";
            component.quantity = '12gr';

            component['reinitializeItem']();

            expect(component.itemName).toEqual('');
            expect(component.quantity).toEqual('');
        })
    });
})

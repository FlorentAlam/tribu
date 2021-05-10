import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AddCategoryComponent } from './addCategory.component';

describe('[Component] Add Category', () => {
    let component: AddCategoryComponent;
    let fixture: ComponentFixture<AddCategoryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                StoreModule.forRoot({}),
                FormsModule
            ],
            declarations: [
                AddCategoryComponent
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddCategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('isCategoryLengthEnough()', () => {
        it('should return false if not long enough', () => {
            component.categoryName = 'az';
            expect(component.isCategoryLengthEnough()).toBe(false);
        });
        it('should return true if long enough', () => {
            component.categoryName = 'azde';
            expect(component.isCategoryLengthEnough()).toBe(true);
        });
    });

});

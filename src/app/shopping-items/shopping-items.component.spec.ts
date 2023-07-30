import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemsComponent } from './shopping-items.component';

describe('ShoppingItemsComponent', () => {
  let component: ShoppingItemsComponent;
  let fixture: ComponentFixture<ShoppingItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingItemsComponent]
    });
    fixture = TestBed.createComponent(ShoppingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

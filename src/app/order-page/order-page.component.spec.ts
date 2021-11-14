import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageComponent } from './order-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('OrderPageComponent', () => {
  let component: OrderPageComponent;
  let fixture: ComponentFixture<OrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ OrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the same amount of elements on the page as defined in the reactive form.', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#order-form');
    const inputElements = formElement.querySelectorAll('input');
    const selectElements = formElement.querySelectorAll('select');

    expect(inputElements.length + selectElements.length).toEqual(8);
  });

  it('should consider email invalid when there is no email entered.', () => {
    const email = component.orderForm.get('customer.email')!;
    email.setValue('notAnEmail');
    expect(email.valid).toBeFalsy();
  });

  it('should consider a form valid when all elements are filled out correctly.', () => {
    component.orderForm.get('customer.email')?.setValue('joe@joe.joe');
    component.orderForm.get('customer.givenNames')?.setValue('Joe');
    component.orderForm.get('customer.surname')?.setValue('Consumer');
    component.orderForm.get('customer.phoneNumber')?.setValue('12345678');
    component.orderForm.get('address.line1')?.setValue('1 Italy street');
    component.orderForm.get('address.countryCode')?.setValue('IT');
    component.orderForm.get('address.postcode')?.setValue('1000');
    component.orderForm.get('address.suburb')?.setValue('Venice');

    expect(component.orderForm.valid).toBeTruthy();
  });
});

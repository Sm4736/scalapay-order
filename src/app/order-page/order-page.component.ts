import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Order} from "../_model/order.model";
import {CheckoutService} from "../_services/checkout.service";
import {Cart} from "../_model/cart.model";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.sass']
})
export class OrderPageComponent implements OnInit {
  /**
   * The model for the template.
   */
  orderForm: FormGroup = {} as FormGroup;

  /**
   * The order is used to model the data collected by the checkout page and send it to the server.
   */
  order: Order = {} as Order;

  /**
   * The cart is a list of products, and subtotal that is requested from the NodeJS server.
   */
  cart: Cart = {} as Cart;

  /**
   * @param fb
   * @param checkoutService
   */
  constructor(private fb: FormBuilder, private checkoutService: CheckoutService) {
  }

  ngOnInit(): void {
    this.buildFormModel();

    // Set the cardId to one, this would normally be handled by a url param, or database call on the server.
    this.order.cartId = 1;
    this.checkoutService.getCart(this.order.cartId).subscribe(
      (res) => {
        this.cart = res;
        console.log(res);
      });
  }

  /**
   * Populates the FormModel.
   * @private
   */
  private buildFormModel() {
    this.orderForm = this.fb.group({
      customer: this.fb.group({
        givenNames: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber: ['', Validators.required],
      }),
      address: this.fb.group({
        line1: ['', Validators.required],
        suburb: ['', Validators.required],
        postcode: ['', Validators.required],
        countryCode: ['IT', Validators.required],
      }),
    })
  }

  /**
   * Populate the order variable so that it can be sent to the server.
   * @private
   */
  private populateOrder() {
    this.order.consumer = {
      email: this.orderForm.value.customer['email'],
      givenNames: this.orderForm.value.customer['givenNames'],
      phoneNumber: this.orderForm.value.customer['phoneNumber'],
      surname: this.orderForm.value.customer['surname']
    }
    this.order.shipping = {
      countryCode: this.orderForm.value.address['countryCode'],
      line1: this.orderForm.value.address['line1'],
      name: this.orderForm.value.customer['givenNames'] + ' ' + this.orderForm.value.customer['surname'],
      postcode: this.orderForm.value.address['postcode'],
      suburb: this.orderForm.value.address['suburb'],
    }
  }

  /**
   * Submits the completed checkout page.
   */
  onSubmit() {
    this.populateOrder()

    // Send the checkout information to the NodeJS server and on success redirect to Scalapay.
    this.checkoutService.submitOrderToScalapay(this.order).subscribe(
      (res) => {
        // Redirect the browser to Scalapay.
        window.location.href = res;
      },
      (res) => {
        alert('There was when submitting your order. Please try again later.')
      }
    )
  }

}

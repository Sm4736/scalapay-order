import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Cart} from "../_model/cart.model";
import {Order} from "../_model/order.model";

/**
 * This service provides functions that interact with our nodejs server.
 */
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  /**
   * @param http HttpClient
   */
  constructor(private http: HttpClient) {

  }

  /**
   * Gets the cart that is associated with the user.
   * @param cartId The id of the cart.
   */
  public getCart(cartId: number){
    return this.http.get<Cart>(environment.cartEndpoint + cartId);
  }

  /**
   * Submits the order to our NodeJS server, which then forwards it to Scalapay.
   *
   * @param order An order that has been filled out on the checkout page.
   */
  public submitOrderToScalapay(order: Order) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    }
    return this.http.post<string>(environment.submitEndpoint, JSON.stringify(order), httpOptions);
  }
}

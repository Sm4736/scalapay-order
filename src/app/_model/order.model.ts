import {Shipping} from "./shipping.model";
import {Customer} from "./customer.model";

/**
 * This manages all of the Order details which will be sent to the server.
 */
export interface Order {
  /**
   * The abrbitrary database ID of the cart.
   */
  cartId: number;

  /**
   * The customer details of the Order.
   */
  consumer: Customer;

  /**
   * The shipping details of the Order.
   */
  shipping: Shipping;
}

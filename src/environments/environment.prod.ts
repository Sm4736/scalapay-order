export const environment = {
  production: true,
  /**
   * The endpoint for our nodeJs server that gets the contents of the cart.
   */
  cartEndpoint: "http://127.0.0.1:3000/api/cart/",

  /**
   * The submission endpoint that contacts Scalapay.
   */
  submitEndpoint: "http://127.0.0.1:3000/api/order/submit",
};

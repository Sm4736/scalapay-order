// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  /**
   * The endpoint for our nodeJs server that gets the contents of the cart.
   */
  cartEndpoint: "http://127.0.0.1:3000/api/cart/",

  /**
   * The submission endpoint that contacts Scalapay.
   */
  submitEndpoint: "http://127.0.0.1:3000/api/order/submit",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/**
 * The Cart object that is retrieved from the server.
 */
export interface Cart {
  /**
   * The arbitrary database ID.
   */
  id: number;

  /**
   * The total cost of the Cart.
   * Format: 20.00
   */
  amount: string;

  /**
   * The currency used by the Cart.
   * Format: EUR
   */
  currency: string;

  /**
   * The Products in the Cart.
   */
  products: CartProduct[];
}

/**
 * Products that are in the cart.
 */
export interface CartProduct {
  /**
   * The arbitrary Database ID.
   */
  id: number;

  /**
   * The name of the Product.
   */
  name: string;

  /**
   * The SKU of the product.
   */
  sku: string;

  /**
   * The price of the Product.
   * Format: 20.00
   */
  amount: string;

  /**
   * The currency that corresponds with the amount.
   * Format: EUR
   */
  currency: string;

  /**
   * The category of the product.
   */
  category: string;
}

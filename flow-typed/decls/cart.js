declare type CartItemSchema = {
  productCode: string,
  quantity: number
}

declare type CartSchema = {
  cartItems: Array<CartItemSchema>
}

/* eslint-disable */
declare class CartItemModel extends Entity {
  /* eslint-disable */
  getCartItems: () => string,
  getQuantity: () => number,
  increaseQuantity: () => CartItemModel,
  decreaseQuantity: () => CartItemModel
}

/* eslint-disable */
declare class CartModel extends Entity {
  /* eslint-disable */
  getCartItems: () => string,
  getCartItemByProductCode: string => CartItemModel,
  restoreCartItems: any[] => CartModel,
  resetCartItems: () => CartModel,
  pushCartItem: CartItemSchema => CartModel,
  removeCartItem: string => CartModel,
  _getCartItemIndexByID: string => number,
  _getCartItemIndexByProductCode: string => number
}

/* eslint-disable */
declare class CartViewModel extends CartModel {
  /* eslint-disable */
}
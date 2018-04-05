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
  getCartItemsJS: () => CartItemModel,
  selectCartItemByProductCode: string => CartItemModel,
  resetCartItems: () => CartModel,
  restoreCartItems: any[] => CartModel,
  pushCartItem: CartItemSchema => CartModel,
  removeCartItem: string => CartModel,
  updateQuantityOfCartItem: { productCode: string, quantity: number } => CartItemModel,
  increaseQuantityOfCartItem: string => CartViewModel,
  decreaseQuantityOfCartItem: string => CartViewModel,
  _getCartItemIndexByID: string => number,
  _getCartItemIndexByProductCode: string => number
}

/* eslint-disable */
declare class CartViewModel extends CartModel {
  increaseQuantityOfCartItem: string => CartViewModel,
  decreaseQuantityOfCartItem: string => CartViewModel
  /* eslint-disable */
}
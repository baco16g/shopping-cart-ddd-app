/* @flow */

type OuterProps = {
  actions: Object
}
type Props = {
  productCode: string,
  itemExistsInCart: boolean
}

export default ({ actions }: OuterProps) => ({
  productCode,
  itemExistsInCart
}: Props) => {
  if (itemExistsInCart) {
    actions.increaseQuantityOfCartItem(productCode)
  } else {
    actions.pushCartItem({
      productCode,
      quantity: 1
    })
  }
  actions.addItemToCart()
}

/* @flow */

type OuterProps = {
  actions: Object
}
type Props = {
  productCode: string,
  itemExists: boolean
}

export default ({ actions }: OuterProps) => ({
  productCode,
  itemExists
}: Props) => {
  if (itemExists) {
    actions.increaseQuantityOfCartItem(productCode)
  } else {
    actions.pushCartItem({
      productCode,
      quantity: 1
    })
  }
  actions.addItemToCart()
}

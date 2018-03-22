/* @flow */
import React, { Fragment } from 'react'

type Props = {
  productVM: ProductViewModel
}

export default function ProductDetails({ productVM }: Props) {
  const name: string = productVM.getVolumeInfo().getName()
  const description: string = productVM.getVolumeInfo().getDescription()
  const formattedPrice: string = productVM.getFormattedPrice()

  return (
    <Fragment>
      <h3 className="prdct-Details_Name">{name}</h3>
      <p className="prdct-Details_Desc">{description}</p>
      <h4 className="prdct-Details_Price">{formattedPrice}</h4>
    </Fragment>
  )
}

/* @flow */
import React, { Fragment } from 'react'

type Props = {
  productVM: ProductViewModel
}

export default function ProductDetails({ productVM }: Props) {
  const name: string = productVM.getVolumeInfo().getName()
  const description: string = productVM.getVolumeInfo().getDescription()

  return (
    <div className="prdct-Details">
      <h3 className="prdct-Details_Name">{name}</h3>
      <p className="prdct-Details_Desc">{description}</p>
    </div>
  )
}

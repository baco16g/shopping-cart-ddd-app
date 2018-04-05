/* @flow */
import React, { Fragment } from 'react'

type Props = {
  productVM: ProductViewModel
}

export default function ProductThumb({ productVM }: Props) {
  const name: string = productVM.getVolumeInfo().getName()
  const thumbnailUrl: string = productVM.getThumbnailUrl()

  return (
    <Fragment>
      <div className="prdct-Details_Thumb">
        <img src={thumbnailUrl} alt={name} />
      </div>
    </Fragment>
  )
}

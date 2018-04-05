/* @flow */
import React, { Fragment } from 'react'

type Props = {
  productVM: ProductViewModel,
  cartVM: CartModel
}

export default function Product({ productVM }: Props) {
  const productCode: string = productVM.getProductCode()
  const name: string = productVM.getVolumeInfo().getName()
  const thumbnailUrl: string = productVM.getThumbnailUrl()
  const formattedPrice: string = productVM.getFormattedPrice()

  return (
    <li className="prdcts-Item">
      <Fragment>
        <div className="prdcts-Item_Thumb">
          <a href={`/product/?product_code=${productCode}`}>
            <img src={thumbnailUrl} alt={name} />
          </a>
        </div>
        <div className="prdcts-Item_Data">
          <Fragment>
            <h3 className="prdcts-Item_Name">
              <a href={`/product/?product_code=${productCode}`}>{name}</a>
            </h3>
            <h4 className="prdcts-Item_Price">{formattedPrice}</h4>
          </Fragment>
        </div>
      </Fragment>
    </li>
  )
}

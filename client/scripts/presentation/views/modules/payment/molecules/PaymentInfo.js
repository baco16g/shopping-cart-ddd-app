/* @flow */
import React from 'react'

type Props = {
  customerVM: CustomerViewModel
}

export default function PaymentInfo({ customerVM }: Props) {
  const contractName = customerVM.getPaymentInfo().getContractName()
  const cardNumber = customerVM.getHidedCardNumber()
  const expiry = customerVM.getExpiry()

  return (
    <ul className="pymnt-Card">
      <li className="pymnt-Card_Item">
        <h4 className="pymnt-Card_Item_hdg">Contract Name</h4>
        <p className="pymnt-Card_Item_txt">{contractName}</p>
      </li>
      <li className="pymnt-Card_Item">
        <h4 className="pymnt-Card_Item_hdg">Card Number</h4>
        <p className="pymnt-Card_Item_txt">{cardNumber}</p>
      </li>
      <li className="pymnt-Card_Item">
        <h4 className="pymnt-Card_Item_hdg">Expiry</h4>
        <p className="pymnt-Card_Item_txt">{expiry}</p>
      </li>
    </ul>
  )
}

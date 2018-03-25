import React from 'react'
import { Field } from 'redux-form'

type Props = {
  commonVM: CommonViewModel
}

export default function FormPaymentInfo({ commonVM }: Props) {
  const expiryMonthOptions = commonVM.createMonthPulldwon()
  const expiryYearOptions = commonVM.createYearPulldwon()

  return (
    <div className="signup-Form_Block">
      <h3 className="signup-Form_Block_hdg">Payment Info</h3>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <label htmlFor="cardNumber">Card Number</label>
          <Field name="cardNumber" component="input" type="tel" />
        </div>
      </div>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <label htmlFor="expiryMonth">Expiry Month</label>
          <Field name="expiryMonth" component="select">
            {expiryMonthOptions}
          </Field>
        </div>
        <div className="signup-Form_Group">
          <label htmlFor="expiryYear">Expiry Year</label>
          <Field name="expiryYear" component="select">
            {expiryYearOptions}
          </Field>
        </div>
        <div className="signup-Form_Group">
          <label htmlFor="cvc">CVC</label>
          <Field name="cvc" component="input" type="tel" />
        </div>
      </div>
    </div>
  )
}

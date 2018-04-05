import React from 'react'
import { Field } from 'redux-form'
import InputField from '~/presentation/views/_core/atoms/InputField'
import selectField from '~/presentation/views/_core/atoms/selectField'
import * as valid from '~/presentation/views/utils/validation'

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
          <Field
            label="Card Number"
            name="cardNumber"
            type="tel"
            component={InputField}
            validate={[valid.required, valid.number]}
          />
        </div>
      </div>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <Field
            label="Contract Name"
            name="contractName"
            type="text"
            component={InputField}
            validate={[valid.required, valid.alphaNumeric]}
            normalize={value => value.toUpperCase()}
          />
        </div>
      </div>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <Field
            name="expiryMonth"
            label="Expiry Month"
            component={selectField}
            options={expiryMonthOptions}
            validate={valid.required}
          />
        </div>
        <div className="signup-Form_Group">
          <Field
            name="expiryYear"
            label="Expiry Year"
            component={selectField}
            options={expiryYearOptions}
            validate={valid.required}
          />
        </div>
        <div className="signup-Form_Group">
          <Field
            label="CVC"
            name="cvc"
            type="tel"
            component={InputField}
            validate={[
              valid.required,
              valid.number,
              valid.maxLength3,
              valid.minLength3
            ]}
          />
        </div>
      </div>
    </div>
  )
}

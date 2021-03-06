import React from 'react'
import { Field } from 'redux-form'
import InputField from '~/presentation/views/_core/atoms/InputField'
import * as valid from '~/presentation/views/utils/validation'

export default function FormCustomerInfo() {
  return (
    <div className="signup-Form_Block">
      <h3 className="signup-Form_Block_hdg">Customer Info</h3>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <Field
            label="User Id"
            name="customerId"
            type="text"
            component={InputField}
            validate={[valid.required, valid.alphaNumeric]}
          />
        </div>
      </div>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <Field
            label="First Name"
            name="firstName"
            type="text"
            component={InputField}
            validate={[valid.required, valid.alphaNumeric]}
          />
        </div>
        <div className="signup-Form_Group">
          <Field
            label="Last Name"
            name="lastName"
            type="text"
            component={InputField}
            validate={[valid.required, valid.alphaNumeric]}
          />
        </div>
      </div>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <Field
            label="Email"
            name="email"
            type="email"
            component={InputField}
            validate={[valid.required, valid.email]}
          />
        </div>
      </div>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <Field
            label="Password"
            name="password"
            type="password"
            component={InputField}
            validate={[valid.required, valid.alphaNumeric]}
          />
        </div>
      </div>
    </div>
  )
}

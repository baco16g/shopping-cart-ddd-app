import React from 'react'
import { Field } from 'redux-form'

export default function FormCustomerInfo() {
  return (
    <div className="signup-Form_Block">
      <h3 className="signup-Form_Block_hdg">Customer Info</h3>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <label htmlFor="id">User Id</label>
          <Field name="id" component="input" type="text" />
        </div>
      </div>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <label htmlFor="fisrtName">First Name</label>
          <Field name="fisrtName" component="input" type="text" />
        </div>
        <div className="signup-Form_Group">
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
      </div>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
      </div>
      <div className="signup-Form_Row">
        <div className="signup-Form_Group">
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
      </div>
    </div>
  )
}

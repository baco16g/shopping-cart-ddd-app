/* @flow */
import React, { Fragment } from 'react'

type Props = {
  input: Object,
  name: string,
  label: string,
  type: string,
  meta: Object
}

export default function InputField({
  input,
  name,
  label,
  type,
  meta: { touched, error, warning }
}: Props) {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <input {...input} name={name} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </Fragment>
  )
}

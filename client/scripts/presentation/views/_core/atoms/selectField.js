/* @flow */
import React, { Fragment } from 'react'

type Props = {
  input: Object,
  name: string,
  label: string,
  meta: Object,
  options: Array<any>
}

export default function selectField({
  input,
  name,
  label,
  meta: { touched, error, warning },
  options
}: Props) {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <select {...input}>{options}</select>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </Fragment>
  )
}

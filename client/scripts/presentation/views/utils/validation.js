export const required = value => (value ? undefined : 'This field is required')

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

///

export const minLength3 = minLength(3)
export const maxLength3 = maxLength(3)

/* @flow */
import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { compose, pure, withHandlers, type HOC } from 'recompose'
import connector from '~/presentation/views/modules/login/hocs/connector'
import submitHandler from '~/presentation/views/modules/login/hocs/withHandlers/submit'

const enhancer: HOC<*, *> = compose(
  reduxForm({ form: 'login' }),
  connector,
  withHandlers({
    submitHandler
  }),
  pure
)

export default enhancer(
  ({
    actions,
    commonVM,
    customerVM,
    submitHandler,
    handleSubmit,
    pristine,
    submitting,
    reset
  }) => {
    const isFetching: boolean = commonVM.hasEventkeyInFetchingQueue()

    return (
      <Fragment>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password" />
          </div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </form>
      </Fragment>
    )
  }
)

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
  ({ commonVM, submitHandler, handleSubmit, error, pristine, submitting }) => {
    const isFetching: boolean = commonVM.hasEventkeyInFetchingQueue()

    return (
      <Fragment>
        {isFetching ? (
          ''
        ) : (
          <div className="login-Container">
            <div className="login-Container_Inner">
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="login-Form_Row">
                  <div className="login-Form_Group">
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                  </div>
                </div>
                <div className="login-Form_Row">
                  <div className="login-Form_Group">
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password" />
                  </div>
                </div>
                {error && <div className="login-Form_Error">{error}</div>}
                <button
                  className="login-Form_Submmit"
                  type="submit"
                  disabled={pristine || submitting}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
)

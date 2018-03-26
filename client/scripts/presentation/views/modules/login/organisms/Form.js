/* @flow */
import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { compose, pure, withHandlers, type HOC } from 'recompose'
import connector from '~/presentation/views/modules/login/hocs/connector'
import submitHandler from '~/presentation/views/modules/login/hocs/withHandlers/submit'
import Loading from '~/presentation/views/_core/atoms/Loading'
import renderInputField from '~/presentation/views/_core/atoms/renderInputField'
import * as valid from '~/presentation/views/utils/validation'

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
          <Loading />
        ) : (
          <div className="login-Container">
            <div className="login-Container_Inner">
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="login-Form_Row">
                  <div className="login-Form_Group">
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      component={renderInputField}
                      validate={[valid.required, valid.email]}
                    />
                  </div>
                </div>
                <div className="login-Form_Row">
                  <div className="login-Form_Group">
                    <Field
                      label="Password"
                      name="password"
                      type="password"
                      component={renderInputField}
                      validate={[valid.required, valid.alphaNumeric]}
                    />
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
                <div className="login-Form_SignUp">
                  <a href="/signup/">New customer? Start here.</a>
                </div>
              </form>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
)

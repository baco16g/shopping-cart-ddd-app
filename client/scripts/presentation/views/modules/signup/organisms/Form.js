/* @flow */
import React, { Fragment } from 'react'
import { reduxForm } from 'redux-form'
import { compose, pure, withHandlers, type HOC } from 'recompose'
import connector from '~/presentation/views/modules/signup/hocs/connector'
import submitHandler from '~/presentation/views/modules/signup/hocs/withHandlers/submit'
import FormCustomerInfo from '~/presentation/views/modules/signup/molecules/FormCustomerInfo'

const enhancer: HOC<*, *> = compose(
  reduxForm({ form: 'signup' }),
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
          <div className="signup-Container">
            <div className="signup-Container_Inner">
              <form onSubmit={handleSubmit(submitHandler)}>
                <FormCustomerInfo />
                {error && <div className="signup-Form_Error">{error}</div>}
                <button
                  className="signup-Form_Submmit"
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

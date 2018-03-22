/* @flow */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { creators as customerCreators } from '~/port/redux/packages/customer'

const creators = {
  ...customerCreators
}

const connector = connect(
  (state: any, _props) => {
    return state
  },
  dispatch => ({ actions: bindActionCreators({ ...creators }, dispatch) })
)

export default connector

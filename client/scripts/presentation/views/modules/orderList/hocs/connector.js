/* @flow */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { creators as orderListCreators } from '~/port/redux/packages/orderList'

const creators = {
  ...orderListCreators
}

const connector = connect(
  (state: any, _props) => {
    return state
  },
  dispatch => ({ actions: bindActionCreators({ ...creators }, dispatch) })
)

export default connector

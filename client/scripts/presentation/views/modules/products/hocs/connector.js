/* @flow */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { creators as productsCreators } from '~/port/redux/packages/products'

const creators = {
  ...productsCreators
}

const connector = connect(
  (state: any, _props) => {
    return state
  },
  dispatch => ({ actions: bindActionCreators({ ...creators }, dispatch) })
)

export default connector

/* @flow */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { creators as productsCreators } from '~/port/redux/packages/products'
import { creators as cartCreators } from '~/port/redux/packages/cart'

const creators = {
  ...productsCreators,
  ...cartCreators
}

const connector = connect(
  (state: any, _props) => {
    return state
  },
  dispatch => ({ actions: bindActionCreators({ ...creators }, dispatch) })
)

export default connector

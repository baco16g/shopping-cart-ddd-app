/* @flow */

import createActionReducer from '~/port/lib/createActionReducer'

const { types, creators, reducer } = createActionReducer(
  ['setQueries', 'pushFetchingQueue', 'deleteFetchingQueue'],
  '/common/'
)

export { types, creators, reducer }

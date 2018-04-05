/* @flow */

import { Record, List, Map } from 'immutable'

const props = (): Object => ({
  fetchingQueue: List([]),
  queries: Map({})
})

const CommonModel = () =>
  class extends Record(props()) {
    /**********************
     * Getter
     **********************/

    // API Fetch Status
    getFetchingQueue(): List<string> {
      return this.get('fetchingQueue')
    }
    getFetchingQueueSize(): number {
      return this.getFetchingQueue().size
    }
    hasEventkeyInFetchingQueue(): boolean {
      return this.getFetchingQueueSize() > 0
    }
    hasTargetEventKeyInFetchingQueue(eventkey: string): boolean {
      return this.getFetchingQueue().includes(eventkey)
    }

    // URL Query
    getQueries(): Map {
      return this.get('queries')
    }
    selectQueryValueByKey(key: string): Map {
      return this.getQueries().find((_, k) => k === key)
    }

    /**********************
     * Setter
     **********************/

    // API Fetch Status
    pushFetchingQueue({ eventkey }: { eventkey: string }): CommonModel {
      return this.update('fetchingQueue', q => q.push(eventkey))
    }
    deleteFetchingQueue({ eventkey }: { eventkey: string }): CommonModel {
      return this.update('fetchingQueue', q =>
        q.filterNot((v: string) => v === eventkey)
      )
    }

    // URL Query
    setQueries({ queries }: { queries: Object }): CommonModel {
      return this.set('queries', Map(queries))
    }
  }

export default CommonModel

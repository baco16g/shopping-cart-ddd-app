/* @flow */
import React from 'react'
import { times } from 'lodash'
import CommonModel from '~/domain/Common/Common'

export default class CommonViewModel extends CommonModel() {
  constructor(args) {
    super(args)
  }
  createMonthPulldwon(to: number = 1, from: number = 12) {
    if (to < 1 || 12 < to || from < 1 || 12 < from) {
      throw new Error('引数の値に誤りがあります')
    }
    const _n = from - to + 1
    return times(_n, Number).map(n => {
      const month = to + n
      return (
        <option key={n} value={month}>
          {month}
        </option>
      )
    })
  }
  createYearPulldwon(to: number = 1900, from: number = 2050) {
    if (to < 1 || from < 1) {
      throw new Error('引数の値に誤りがあります')
    }
    const _n = from - to + 1
    return times(_n, Number).map(n => {
      const year = to + n
      return (
        <option key={n} value={year}>
          {year}
        </option>
      )
    })
  }
}

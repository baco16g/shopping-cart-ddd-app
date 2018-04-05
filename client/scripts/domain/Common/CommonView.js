/* @flow */
import React from 'react'
import { times } from 'lodash'
import CommonModel from '~/domain/Common/Common'

export default class CommonViewModel extends CommonModel() {
  constructor(args) {
    super(args)
  }
  createMonthPulldwon(from: number = 1, to: number = 12) {
    if (to < 1 || 12 < to || from < 1 || 12 < from) {
      throw new Error('引数の値に誤りがあります')
    }
    const _n = to - from + 1
    return times(_n, Number).map(n => {
      const month = from + n
      return (
        <option key={n} value={month}>
          {month}
        </option>
      )
    })
  }
  createYearPulldwon(from: number | 'now', to: number | 'now') {
    if (from === 'now') {
      from = new Date().getFullYear()
    } else if (from === null) {
      from = new Date().getFullYear() - 100
    }
    if (to === 'now') {
      to = new Date().getFullYear()
    } else if (to === null) {
      to = new Date().getFullYear() + 10
    }
    if (to < 1 || from < 1) {
      throw new Error('引数の値に誤りがあります')
    }
    const _n = to - from + 1
    return times(_n, Number).map(n => {
      const year = from + n
      return (
        <option key={n} value={year}>
          {year}
        </option>
      )
    })
  }
}

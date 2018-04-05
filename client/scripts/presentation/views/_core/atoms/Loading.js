import React from 'react'
import ReactLoading from 'react-loading'

export default function Loading() {
  return (
    <div className="st-Loading">
      <div className="st-Loading_Inner">
        <ReactLoading
          type="bubbles"
          color="#e74c3c"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  )
}

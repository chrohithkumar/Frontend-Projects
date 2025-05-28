import React from 'react'
import CreateContextS from './CreateContext'
import UseContent from './UseContent'

export default function Wrap() {
  return (
    <CreateContextS>
        <UseContent/>
    </CreateContextS>
  )
}

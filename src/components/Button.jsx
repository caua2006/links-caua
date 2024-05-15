import React from 'react'
import { CardButton } from '../styles/Card.styles'

export default function Button({name}) {
  return (
    <CardButton>
        {name}
    </CardButton>
  )
}

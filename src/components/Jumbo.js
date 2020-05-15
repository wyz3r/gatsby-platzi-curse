import React from 'react'
import {StyledJumbo} from '../styles/components'
import {Image} from './'
export default function Jumbo({description}) {
  return (
    <StyledJumbo>
      <div>
        <h2>Consigue tu shirt</h2>
        <small>
          {description}
        </small>
      </div>
      <Image filename='Icon' />
    </StyledJumbo>
  )
}

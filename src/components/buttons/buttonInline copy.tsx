import React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'

const Button = styled.button`
  color: red;
  padding: 5px;
  font-size: 2rem;
`

export interface Iprops {
  title?: string
}

const ButtonInline: NextPage<Iprops> = props => {
  return <Button>{props.title ? props.title : 'null'}</Button>
}

export default ButtonInline

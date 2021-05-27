import React from 'react'
import { NextPage } from 'next'
import style from './styles.module.scss'

export interface Iprops {
  title?: string
}

const ButtonInline: NextPage<Iprops> = props => {
  return (
    <div className={style.buttonInline}>
      <button>{props.title ? props.title : 'null'}</button>
    </div>
  )
}

export default ButtonInline

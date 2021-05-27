import React, { useState } from 'react'
import { NextPage } from 'next'
import ButtonInline from '../buttons/buttonInline'

export interface Iprops {
  title?: string
}

const Footer: NextPage<Iprops> = props => {
  const [counter, setCounter] = useState(1)

  function counterclick() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <footer>
        {props.title}
        <span>{counter}</span>
        <div onClick={counterclick}>
          <ButtonInline title={'teste'} />
        </div>
      </footer>
    </div>
  )
}

export default Footer

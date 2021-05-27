//SPA

//SSR

//SSG
import React from 'react'
import { useEffect } from 'react'
import { NextPage } from 'next'

const SPA: NextPage = () => {
  useEffect(() => {
    fetch('http://localhost:3333/posts')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])
  return <h1>1</h1>
}

export default SPA

import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Boilerplate</title>
      </Head>
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure.</p>
    </Container>
  )
}

export default Home

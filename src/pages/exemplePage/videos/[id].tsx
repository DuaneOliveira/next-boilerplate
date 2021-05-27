import { useRouter } from 'next/router'
import React from 'react'
const Video = function () {
  const router = useRouter()
  return <h1>{router.query.id}</h1>
}

export default Video

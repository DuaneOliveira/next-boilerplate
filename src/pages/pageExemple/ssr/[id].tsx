// SSG
import React from 'react'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { api } from '../../../services/api'
import { segToTimeString } from '../../../utils/timer'
import { useRouter } from 'next/router'
import style from '../../../styles/pages/exemplePage/videos/style.module.scss'
import Link from 'next/link'

type Videos = {
  id: string
  title: string
  duration: string
  image: string
}
type VideoProp = {
  videos: Videos
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Video = function ({ videos }: VideoProp) {
  const router = useRouter()
  if (router.isFallback) {
    return <p>Carregando</p>
  }
  return (
    <section className={style.allImage}>
      <ul>
        <div className={style.title}>
          <p>{videos.title}</p>
          <span>{videos.duration}</span>
        </div>
        <li key={videos.id}>
          <div className={style.informacao}>
            <Link href={`${Number(videos.id) - 1}`}>Anterior</Link>
          </div>
          <Image
            width={2000}
            height={2000}
            src={`/uploads/carousel/${videos.image}`}
            objectFit={'contain'}
          />
          <div className={style.informacao}>
            <Link href={`${Number(videos.id) + 1}`}>Próximo</Link>
          </div>
        </li>
      </ul>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.params
  const { data } = await api.get(`videos/${id}`)

  const videos = {
    id: data.id,
    title: data.title,
    image: data.image,
    duration: segToTimeString(Number(data.duration))
  }
  console.log(videos)

  return {
    props: {
      videos
    }
  }
}

export default Video

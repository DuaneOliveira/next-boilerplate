// SSR
import React from 'react'
import { GetServerSideProps } from 'next'
import { segToTimeString } from '../../../utils/timer'
import Image from 'next/image'
import { api } from '../../../services/api'
import Link from 'next/link'
import style from '../../../styles/pages/exemplePage/ssg.module.scss'
type Videos = {
  id: string
  title: string
  duration: string
  image: string
}
type HomeProps = {
  videos: Array<Videos>
}

const SSR = function ({ videos }: HomeProps) {
  return (
    <section className={style.allImage}>
      <ul>
        {videos.map(video => {
          return (
            <li key={video.id}>
              <Image
                width={2000}
                height={2000}
                src={`/uploads/carousel/${video.image}`}
                objectFit={'contain'}
              />
              <div className={style.informacao}>
                <Link href={`ssr/${video.id}`}>Teste</Link>
                <p>{video.title}</p>
                <span>{video.duration}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('videos', {
    params: {
      _limit: 40,
      _sort: 'id',
      _order: 'desc'
    }
  })

  const videos = data.map(video => {
    return {
      id: video.id,
      title: video.title,
      image: video.image,
      duration: segToTimeString(Number(video.duration))
    }
  })

  return {
    props: {
      videos
    }
  }
}
export default SSR

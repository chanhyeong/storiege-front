import NextHead from 'next/head'

import '../styles/common.scss'

export default ({ title = 'Storiege:: 개인 위키 저장소' }) => (
  <NextHead>
    <link
      rel='stylesheet'
      href='/_next/static/style.css'
    />
    <title>{ title }</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
  </NextHead>
)
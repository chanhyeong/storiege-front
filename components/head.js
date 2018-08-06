import Head from 'next/head'
import Nav from '../components/nav'

import '../styles/common.scss'

export default ({ title = 'Storiege:: 개인 위키 저장소', children }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Nav />
    </div>
)
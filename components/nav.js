import Link from 'next/link'
import Head from './head'

import '../styles/common.scss'

export default () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link prefetch href="/">
                        <a>홈</a>
                    </Link>
                </li>
                <li>
                    <Link prefetch href="/about">
                        <a>Storiege 소개</a>
                    </Link>
                </li>
                <li>
                    <Link prefetch href="/write">
                        <a>글 작성</a>
                    </Link>
                </li>
                <li>
                    <Link prefetch href="/info">
                        <a>내정보</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
)

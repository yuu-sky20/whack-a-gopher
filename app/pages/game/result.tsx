import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'

export default function ResultScene() {


    // mongodbと非同期通信してデータを取ってくる
    // 表形式で表示

    return (
        <div>
            <Head>
                <title>Whack-a-Gopher</title>
                <meta name="description" content="whack-a-gopher result scene." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Result Here.
            <div>
                <ul>
                    <li>
                    <Link href="/game/main">Retry Game</Link>
                    </li>
                    <li>
                    <Link href="/">Go to Title</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
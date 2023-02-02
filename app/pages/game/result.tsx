import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'

export default function ResultScene() {
    return (
        <div>
            <Head>
                <title>Whack-a-Gopher</title>
                <meta name="description" content="whack-a-gopher result scene." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Game Here.
            <div>
                <ul>
                    <li>
                    <Link href="/game/main">Retry Game</Link>
                    </li>
                    <li>
                    <Link href="/index">Go to Title</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
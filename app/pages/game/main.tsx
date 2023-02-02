import Head from 'next/head'
import styled from 'styled-components'

export default function MainGameScene() {
    return (
        <div>
            <Head>
                <title>Whack-a-Gopher</title>
                <meta name="description" content="whack-a-gopher game scene." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Game Here.
        </div>
    )
}
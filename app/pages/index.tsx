import Head from 'next/head'
import styled from 'styled-components'
import Platform from './templates/platform'
import {Game, GameStart, GameEnd} from "../controller/gameManager"

export default function Home() {

  return (
    <div>
      <Head>
        <title>Whack-a-Gopher</title>
        <meta name="description" content="whack-a-gopher app here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Platform props={{}}>
        </Platform>
      </main>
    </div>
  )
}

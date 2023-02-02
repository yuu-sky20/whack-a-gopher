import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whack-a-Gopher</title>
        <meta name="description" content="whack-a-gopher title scene" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Whack a Gopher</h1>
          <h4>and Lisp Alien</h4>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/game/main">Game Start!</Link>
            </li>
            <li>
              <Link href="/game/result">Result Menu</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

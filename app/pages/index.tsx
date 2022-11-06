import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  const Text = styled.div`
    color: ${props => props.color ? props.color : "yellow"}
  `

  return (
    <div>
      <Head>
        <title>Whack-a-Gopher</title>
        <meta name="description" content="whack-a-gopher app here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text color="blue">Hello!</Text>
      </main>
    </div>
  )
}

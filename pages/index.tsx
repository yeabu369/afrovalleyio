import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Hero } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | AfroValley Trade Platform</title>
        <meta name="description" content="Afrovalley Trading Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
      </main>

      <footer></footer>
    </div>
  )
}

export default Home

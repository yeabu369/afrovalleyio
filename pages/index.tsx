import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer, Header, Hero } from '../components'
import content from '../data/footer';

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

      <footer>
        <Footer data={content.data} />
      </footer>
    </div>
  )
}

export default Home

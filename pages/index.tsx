import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer, Header, Hero, Layout } from '../components'
import content from '../data/footer';

const Home: NextPage & { getLayout: Function } = () => {
  return (
    <div>
      <Head>
        <title>Home | AfroValley Trade Platform</title>
        <meta name="description" content="Afrovalley Trading Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </div>
  )
}

Home.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout>
      <Header />
      {page}
      <Footer data={content.data} />
    </Layout>
  )
}

export default Home

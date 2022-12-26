import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero, Layout } from '../components'

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
      {page}
    </Layout>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer, Header, Hero, Layout, Navbar } from '../components'
import content from '../data/footer';

const Dashboard: NextPage & { getLayout: Function } = () => {
  return (
    <div>
      <Head>
        <title>Dashboard | AfroValley Trade Platform</title>
        <meta name="description" content="Afrovalley Trading Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  )
}

Dashboard.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Dashboard

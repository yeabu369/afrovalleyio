import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer, Header, Layout, Market } from '../components'

const Marketplace: NextPage & { getLayout: Function } = () => {
  return (
    <>
      <Head>
        <title>Marketplace | AfroValley Trade Platform</title>
        <meta name="description" content="Afrovalley Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Market />
    </>
  )
}

Marketplace.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Marketplace
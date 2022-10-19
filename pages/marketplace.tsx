import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer, Header, Layout, Market } from '../components'
import content from '../data/footer'

const Marketplace: NextPage & { getLayout: Function } = () => {
  return (
    <div>
      <Head>
        <title>Marketplace | AfroValley Trade Platform</title>
        <meta name="description" content="Afrovalley Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Market />
    </div>
  )
}

Marketplace.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout>
      <Header />
      {page}
      <Footer data={content.data} />
    </Layout>
  )
}

export default Marketplace
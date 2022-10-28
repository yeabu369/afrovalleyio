import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer, Header, Layout, Market, OrderContainer } from '../../components'
import content from '../../data/footer'

const Order: NextPage & { getLayout: Function } = () => {
  return (
    <>
      <Head>
        <title>Order | AfroValley Trade Platform</title>
        <meta name="description" content="Afrovalley Order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <OrderContainer />
    </>
  )
}

Order.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Order
import type { NextPage } from 'next'
import Head from 'next/head'
import { ChatContainer, Layout } from '../components'

const Chats: NextPage & { getLayout: Function } = () => {

  return (
    <div>
      <Head>
        <title>Chats | AfroValley Trade Platform</title>
        <meta name="description" content="Afrovalley Trading Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ChatContainer />
    </div>
  )
}

Chats.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Chats

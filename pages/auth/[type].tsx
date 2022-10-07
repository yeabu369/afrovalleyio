import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router'
import { Login, Signup } from '../../components';

const Auth: NextPage = () => {
  const router = useRouter();

  const authType = router.query.type;

  const authTitle = `${ authType === 'login' ? "Login" : "Signup" } | AfroValley Trade Platform`;

  return (
    <>
      <Head>
        <title>{authTitle}</title>
        <meta name="description" content="Afrovalley Trading Platform" />
      </Head>
      {authType === 'login' ? <Login /> : <Signup />}
    </>
  )
}

export default Auth
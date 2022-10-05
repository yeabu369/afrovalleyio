import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Login, Signup } from '../../components';

const Auth: NextPage = () => {
  const router = useRouter();

  if (router.pathname === '/auth/login') {
    return <Login />
  } else if (router.pathname === '/auth/signup') {
    return <Signup />
  } else {
    router.push('/auth/login');
    return <>Redirecting</>;
  }
}

export default Auth
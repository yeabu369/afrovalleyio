import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Login, Signup } from '../../components';

const Auth: NextPage = () => {
  const router = useRouter();

  const authType = router.query.type;

  return authType === 'login' ? <Login /> : <Signup />;
}

export default Auth
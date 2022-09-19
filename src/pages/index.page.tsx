import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Main() {
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      router.push('/homepage');
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return <></>;
}

export default Main;

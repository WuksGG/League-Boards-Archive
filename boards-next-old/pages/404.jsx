import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../store/AppContext';

export default function Error404() {
  const router = useRouter();
  const { realm, setRealm } = useContext(AppContext);
  useEffect(() => {
    const block = router.asPath.split('/')[1];
    if (!['na', 'eu'].includes(block)) return;
    setRealm(block);
  }, []);
  return (
    <div>404 Page Not Found</div>
  );
}

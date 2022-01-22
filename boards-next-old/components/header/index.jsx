import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AppContext from '../../store/AppContext';
import styles from './header.module.css';

export default function Header() {
  const router = useRouter();
  const appContext = useContext(AppContext);
  return (
    <div id="header" className={styles.container}>
      <div className={`${styles.inner} pw`}>
        <Link href={{
          pathname: '/[realm]',
          query: {
            'realm': router.query.realm || appContext.realm,
          },
        }}>
          <a className={styles.logo}>League of Legends Boards Archive</a>
        </Link>
        <div className={styles.menu}>
          <Link href={{
            pathname: '/[realm]/categories',
            query: {
              'realm': router.query.realm || appContext.realm,
            }
          }}>
            <a className={styles.menuitem}>Categories</a>
          </Link>
          <a className={styles.menuitem}>Contact</a>
          <a className={styles.menuitem}>About</a>
        </div>
      </div>
    </div>
  )
}
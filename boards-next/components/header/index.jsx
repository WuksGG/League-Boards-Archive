import styles from './header.module.css';
import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <div id="header" className={styles.container}>
      <div className={`${styles.inner} pw`}>
        <Link href={`/${router.query.realm || 'eu'}`}>
          <a className={styles.logo}>League of Legends Boards Archive</a>
        </Link>
        <div className={styles.menu}>
          <Link href={`/${router.query.realm || 'eu'}/categories`}>
            <a className={styles.menuitem}>Categories</a>
          </Link>
          <a className={styles.menuitem}>Contact</a>
          <a className={styles.menuitem}>About</a>
        </div>
      </div>
    </div>
  )
}
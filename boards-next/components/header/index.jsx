import styles from './header.module.css';
import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Header() {
  const Router = useRouter();

  return (
    <div id="header" className={styles.container}>
      <div className={`${styles.inner} pw`}>
        <Link href={Router.query.realm}>
          <a className={styles.logo}>Boards Home</a>
        </Link>
        <div className={styles.menu}>
          <a className={styles.menuitem}>Categories</a>
          <a className={styles.menuitem}>Contact</a>
          <a className={styles.menuitem}>About</a>
        </div>
      </div>
    </div>
  )
}
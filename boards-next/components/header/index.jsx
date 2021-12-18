import styles from './header.module.css';
import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Header() {
  const Router = useRouter();

  return (
    <div id="header" className={styles.container}>
      <div className="pw">
        <Link href={Router.query.locale}>
          <a className={styles.logo}>Boards Home</a>
        </Link>
        <div className={styles.menu}>
          <div>Categories</div>
          <div>Contact</div>
          <div>About</div>
        </div>
      </div>
    </div>
  )
}
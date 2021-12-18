import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './tile.module.css';

export default function CategoryTile({ data: { id, name, shortname, locale }} ) {
  const router = useRouter();
  console.log();

  return (
    <Link href={`/${router.query.realm}/c/${id}`}>
      <div className={styles.container}>
          <div>{id}</div>
          <div>{shortname}</div>
          <div>{name}</div>
          <div>{locale}</div>
      </div>
    </Link>
  )
}
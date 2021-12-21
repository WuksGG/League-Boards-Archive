import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './tile.module.css';

export default function CategoryTile({ data: { id, name, shortname, locale }} ) {
  const router = useRouter();
  console.log();

  return (
    <Link
      href={{
        pathname: '/[realm]/c/[shortname]',
        query: {
          ...router.query,
          shortname,
        },
      }}
      passHref
    >
      <div className={styles.container}>
          <div>{id}</div>
          <div>{shortname}</div>
          <div>{name}</div>
          <div>{locale}</div>
      </div>
    </Link>
  )
}
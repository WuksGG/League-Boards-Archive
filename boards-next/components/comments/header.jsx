import styles from './header.module.css';

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CommentsHeader({
  commentCount,
}) {
  const router = useRouter();
  // console.log(router);
  return (
    <div className={styles.container}>
      <div className={styles['row-1']}>
        <div className={styles.heading}>Comments</div>
        <div className={styles.count}>{commentCount} comments</div>
      </div>
      <div className={styles['row-2']}>
        <Link
          href={{
            pathname: '',
            query: {
              ...router.query,
              show: router.query.show === 'flat' ? 'nested' : 'flat',
            },
          }}
          scroll={false}
        >
          <a className={styles.toggleView}>{router.query.show === 'flat' ? 'Switch to Discussion View' : 'Switch to Chronological View'}</a>
        </Link>
      </div>
    </div>
  );
}
import styles from './header.module.css';

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CommentsHeader({
  commentCount,
}) {
  const router = useRouter();
  const toggleCommentView = (e) => {
    e.preventDefault();
    router.push({
      query: {
        ...router.query,
        show: router.query.show === 'flat' ? 'nested' : 'flat',
      }
    }, {}, {
      shallow: true,
      scroll: false,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles['row-1']}>
        <div className={styles.heading}>Comments</div>
        <div className={styles.count}>{commentCount} comments</div>
      </div>
      <div className={styles['row-2']}>
        <a
          href={`?show=${router.query.show === 'flat' ? 'nested' : 'flat'}`}
          className={styles.toggleView}
          onClick={toggleCommentView}
        >
          {
            router.query.show === 'nested' ?
              'Switch to Chronological View' :
              'Switch to Discussion View'
          }
        </a>
      </div>
    </div>
  );
}

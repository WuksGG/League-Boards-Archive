import styles from './discussionListItem.module.css';
import TimeAgo from 'react-timeago';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DiscussionListItem({ thread }) {
  const netVotes = +thread.upVotes - +thread.downVotes;

  const router = useRouter();
  console.log(router);

  // console.log(thread);
  return (
    <Link href={`/${router.query.realm}/c/${thread.application.shortname}/${thread.id}`}>
      <div className={styles.listItem}>
        <div className={styles['col-1']}>
          <div className={styles.bold}>{netVotes}</div>
          <div className={styles.smalltext}>votes</div>
        </div>
        <div className={styles['col-2']}>
          <div className={styles['thread-title']}>{thread.title}</div>
          <span>
            {
              thread.user
                ? <span>by <Link href='/'>{thread.user.name}</Link> ({thread.user.realm}) </span>
                : null
            }
            in {thread.application.name} <TimeAgo date={thread.createdAt} />
          </span>
        </div>
        <div className={styles['col-3']}>
          <div className={styles.bold}>{thread.viewCount}</div>
          <div className={styles.smalltext}>views</div>
        </div>
        <div className={styles['col-4']}>
          <div className={styles.bold}>{thread.softComments}</div>
          <div className={styles.smalltext}>comments</div>
        </div>
      </div>
    </Link>
  );
}
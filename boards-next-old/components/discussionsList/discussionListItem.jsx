import styles from './discussionListItem.module.css';
import TimeAgo from 'react-timeago';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DiscussionListItem({ thread }) {
  const netVotes = +thread.upVotes - +thread.downVotes;

  const router = useRouter();

  return (
    <Link
      href={{
        pathname: '/[realm]/c/[category]/[threadid]',
        query: {
          ...router.query,
          category: thread.application.shortname,
          threadid: thread.id,
        },
      }}
      passHref
    >
      <div className={styles.listItem}>
        <div className={styles['col-1']}>
          <div className={styles.bold}>{netVotes}</div>
          <div className={styles.smalltext}>votes</div>
        </div>
        <div className={styles['col-2']}>
          <div>
            <Link href={`/${router.query.realm}/c/${thread.application.shortname}/${thread.id}`}>
              <a title={thread.content} className={styles['thread-title']}>{thread.title}</a>
            </Link>
          </div>
          <span className={styles.meta}>
            {
              thread.user
                ? <span>by <Link href='/'><a className={thread.user.isRioter ? 'isRioter' : `${styles.link}`}>{thread.user.name}</a></Link> ({thread.user.realm}) </span>
                : null
            }
            in <Link href={`/${router.query.realm}/c/${thread.application.shortname}`}><a className={styles.link}>{thread.application.name}</a></Link> <TimeAgo date={thread.createdAt} />
          </span>
        </div>
        <div className={styles['col-3']}>
          {(thread.hasRioterComments || thread.user?.isRioter) && (
            <span className={styles.hasRiotPost} />
          )}
        </div>
        <div className={styles['col-4']}>
          <div className={styles.bold}>{thread.viewCount}</div>
          <div className={styles.smalltext}>views</div>
        </div>
        <div className={styles['col-5']}>
          <div className={styles.bold}>{thread.softComments}</div>
          <div className={styles.smalltext}>comments</div>
        </div>
      </div>
    </Link>
  );
}
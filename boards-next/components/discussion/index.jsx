import styles from './discussion.module.css';
import Link from 'next/link';
import TimeAgo from 'react-timeago';
import { marked } from 'marked';

export default function Discussion({ data, query }) {
  const { title, content, user, createdAt, application } = data;

  const markdown = marked.parse(content.body);

  return (
    <div className={styles.discussion}>
      <div className={styles['discussion-title']}>
        <div className={styles.title}>{title}</div>
        <div className={styles.byline}>
          <span className={styles.icon}>
            <img src={user.isRioter ? `/assets/images/riot_fist.png` : `http://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${user.profileIcon}.png`} />
          </span>
          <span>
            <Link href={`/${query.realm}/player/${user.realm}/${user.name}`}>
              <a className={user.isRioter ? 'isRioter': null}>{user.name}</a>
            </Link> ({user.realm})&nbsp;
            submitted <TimeAgo date={createdAt} /> in&nbsp;
            <Link href={`/${query.realm}/c/${application.shortName}`}>
              {application.name}
            </Link>
          </span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.body} dangerouslySetInnerHTML={{__html: markdown}}/>
      </div>
    </div>
  )
}
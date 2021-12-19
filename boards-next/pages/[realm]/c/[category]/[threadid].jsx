import styles from './discussion.module.css';
import TimeAgo from 'react-timeago';

import { marked } from 'marked';

export default function ThreadPage({
  title,
  user,
  createdAt,
  application,
  content,
}) {
  // const md = mdi()
  //   .use(mdic, 'stickers', {
  //     validate: function (params) {
  //       console.log('validating');
  //       return params.trim().match(/^{{sticker:.+}}$/);
  //     },
  //     render: function (tokens, idx) {
  //       console.log('rendering');
  //       var m = tokens[idx].info.trim().match(/^{{sticker:.+}}$/);
  //       console.log(m);
  //       if (tokens[idx].nesting === 1) {
  //         return '<div>omg</div>';
  //       } else {
  //         return '</div>\n'
  //       }
  //     },
  //     marker: '{'
  //   });
  const markdown = marked.parse(content.body);
  // const markdown = marked.parse('{{sticker:sg-kiko}}');
  console.log(markdown);
  return (
    <div className={styles.container}>
      <h2>{application.name}</h2>
      <div className={styles.inner}>
        <div className={styles.discussion}>
          <div className={styles['discussion-title']}>
            <div className={styles.title}>{title}</div>
            <div className={styles.byline}>{user.name} ({user.realm}) submitted <TimeAgo date={createdAt} /> in {application.name}</div>
          </div>
          <div className={styles.content}>
            <div className={styles.body} dangerouslySetInnerHTML={{__html: markdown}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getDiscussion } = await import('../../../../models/discussions');
  const { rows } = await getDiscussion(context);
  const { results } = rows[0];

  return {
    props: results
  }
}
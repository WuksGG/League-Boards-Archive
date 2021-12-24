import { marked } from 'marked';

import Discussion from '../../../../components/discussion';
import Comments from '../../../../components/comments';
import { lolAssets } from '../../../../models/markdown';
import styles from './discussion.module.css';

export default function ThreadPage({
  data,
  query,
}) {
  marked.use({ extensions: [lolAssets] });
  return (
    <div className={styles.container}>
      <h2>{data.application.name}</h2>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <Discussion query={query} data={data} />
          <Comments commentCount={data.softComments} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getDiscussion } = await import('../../../../models/discussions');
  const { rows } = await getDiscussion(context);
  const results = rows[0]?.results;

  if (!results) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageTitle: results.title,
      data: results,
      query: context.query
    }
  }
}

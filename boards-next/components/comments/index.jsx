import CommentsHeader from './header';
import styles from './comments.module.css';

import { useRouter } from 'next/router';

export default function Comments({
  commentCount
}) {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.container}>
      <CommentsHeader commentCount={commentCount} />
      <div>comments section</div>
    </div>
  );
}
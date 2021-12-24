import CommentsHeader from './header';
import styles from './comments.module.css';

export default function Comments({
  commentCount
}) {
  return (
    <div className={styles.container}>
      <CommentsHeader commentCount={commentCount} />
      <div>comments section</div>
    </div>
  );
}
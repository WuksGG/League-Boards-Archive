import CommentsHeader from './header';
import styles from './comments.module.css';
import ChronologicalView from './chronologicalView';

export default function Comments({ commentCount }) {
  // cookie stores preferred view
  // defaulted as chrono
  return (
    <div className={styles.container}>
      <CommentsHeader commentCount={commentCount} />
      <ChronologicalView />
      <div>comments section</div>
    </div>
  );
}
import CommentsHeader from './header';
import styles from './comments.module.css';

export default function Comments(props) {
  return (
    <div className={styles.container}>
      <CommentsHeader />
      <div>comments section</div>
    </div>
  );
}
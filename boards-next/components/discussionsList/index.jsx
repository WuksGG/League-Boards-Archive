import DiscussionListItem from './discussionListItem';
import styles from './discussionsList.module.css';

export default function DiscussionsList({ threads }) {
  return (
    <div className={styles.discussions}>
      {threads.map((discussion) => {
        return <DiscussionListItem key={discussion.id} thread={discussion}/>
      })}
    </div>
  )
}
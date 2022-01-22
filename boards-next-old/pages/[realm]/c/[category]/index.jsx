// This component lists the most recent threads in a specific category.

import DiscussionsList from '../../../../components/discussionsList';

export default function CategoryView({ category, threads }) {
  return (
    <div>
      <h2>{category.name}</h2>
      <DiscussionsList threads={threads}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getThreadsFromCategory } = (await import('../../../../models/categories'));
  const [data] = (await getThreadsFromCategory(context)).rows;

  return {
    props: {
      pageTitle: data.catdata.name,
      category: data.catdata,
      threads: data.result,
    }
  }
}

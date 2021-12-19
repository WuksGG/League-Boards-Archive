// This component lists the most recent threads in a specific category.

export default function CategoryView(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.category.name}</h2>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getThreadsFromCategory } = (await import('../../../../models/categories'));
  const [data] = (await getThreadsFromCategory(context)).rows;
  console.log(data);
  return {
    props: {
      category: data.catdata,
      threads: data.result,
    }
  }
}

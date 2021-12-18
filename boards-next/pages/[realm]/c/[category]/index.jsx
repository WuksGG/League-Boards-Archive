// This component lists the most recent threads in a specific category.

export default function CategoryView(props) {
  console.log(props);
  return (
    <div>category view</div>
  );
}

export async function getServerSideProps(context) {
  const { getThreadsFromCategory } = (await import('../../../../models/categories'));
  const data = await getThreadsFromCategory(context);

  return {
    props: {}
  }
}

import { getCategories } from '../../../../models/categories';

export default function CategoryView(props) {
  return (
    <div>category view</div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}
  }
}

export async function getStaticPaths() {
  const categories = await getCategories();
  const transformedCategories = categories.rows.map((category) => {
    return {
      params: {
        realm: 'eu',
        category: category.id
      }
    }
  })
  return {
    paths: transformedCategories,
    fallback: false,
  };
}
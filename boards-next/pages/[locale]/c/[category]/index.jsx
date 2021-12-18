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
  return {
    paths: [
      { params: { locale: 'en', category: 'test'} },
    ],
    fallback: false,
  };
}
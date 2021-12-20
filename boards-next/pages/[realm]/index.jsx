export default function HomePageWithLocale() {
  return (
    <div>Home</div>
  )
}

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {
      pageTitle: context.params.realm.toUpperCase() + ' Boards Home',
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { realm: 'na' } },
      { params: { realm: 'eu' } }
    ],
    fallback: false,
  }
}
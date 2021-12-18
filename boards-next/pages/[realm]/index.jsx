export default function HomePageWithLocale() {
  return (
    <div>Home</div>
  )
}

export async function getStaticProps() {
  return {
    props: {

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
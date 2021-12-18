export default function ThreadPage(props) {
  return (
    <div>test</div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      'test': 'ok',
    }
  }
}
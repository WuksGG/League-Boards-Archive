export default function Category() {
  return (
    <div>List of discussions</div>
  )
}

export async function getServerSideProps(context) {
  console.log(context.params.shortName);
  return {
    props: {

    }
  }
}

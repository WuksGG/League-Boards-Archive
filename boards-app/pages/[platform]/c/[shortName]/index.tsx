import getDiscussions from '../../../../models/server/getDiscussions';
import { Flex, VStack, Text } from '@chakra-ui/react';
import DiscussionListItem from '../../../../components/organisms/DiscussionListItem';

export default function Category({ discussions, application }) {
  return (
    <Flex direction='column' w='100%'>
      <Text as='h1'>{application.name}</Text>
      <VStack spacing={1}>
        {discussions.map((discussion) => {
          return (
            <DiscussionListItem
              key={discussion.id}
              data={discussion}
            />
          );
        })}
      </VStack>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const [err, discussions] = await getDiscussions(context.params.shortName);
  return {
    props: {
      discussions,
      application: discussions[0].application,
    }
  }
}

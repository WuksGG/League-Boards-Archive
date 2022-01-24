import getDiscussions from '../../../../models/server/getDiscussions';
import { Flex, VStack, Text } from '@chakra-ui/react';
import DiscussionListItem from '../../../../components/organisms/DiscussionListItem';
import type { Discussions, Application } from '../../../../types/app';
import type { ReactElement } from 'react';

type CategoryProps = {
  discussions: Discussions,
  application: Application,
}

export default function Category({ discussions, application }: CategoryProps): ReactElement {
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

type GetServerSidePropsContext = {
  params: {
    shortName: string,
  }
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const [err, discussions] = await getDiscussions(context.params?.shortName);
  return {
    props: {
      discussions,
      application: discussions[0].application,
    }
  }
}

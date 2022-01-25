import getDiscussions from '../../../../models/server/getDiscussions';
import { Flex, VStack, Text } from '@chakra-ui/react';
import DiscussionListItem from '../../../../components/organisms/DiscussionListItem';
import type { Discussions, Application } from '../../../../types/app';
import type { ReactElement } from 'react';
import Breadcrumbs from '../../../../components/organisms/Breadcrumbs';
import { useRouter } from 'next/router';

type CategoryProps = {
  discussions: Discussions,
  application: Application,
}

export default function Category({ discussions, application }: CategoryProps): ReactElement {
  const router = useRouter();
  return (
    <Flex direction='column' w='100%'>
      <Breadcrumbs pagePath={[
        { path: '/', name: 'Home' },
        { path: `/${router.query.platform}`, name: 'EU Boards' },
        { path: `/${router.query.platform}/c/${application.shortName}`, name: application.name },
      ]}/>
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

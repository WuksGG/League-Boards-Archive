import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Flex, VStack, Text } from '@chakra-ui/react';
import type { Discussions, Application } from '../../../../types/app';
import getDiscussions from '../../../../models/server/getDiscussions';
import DiscussionListItem from '../../../../components/organisms/DiscussionListItem';
import Breadcrumbs from '../../../../components/organisms/Breadcrumbs';
import PaginationBar from '../../../../components/molecules/PaginationBar';

type CategoryProps = {
  discussions: Discussions,
  application: Application,
};

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
      <PaginationBar />
    </Flex>
  );
}

type GetServerSidePropsContext = {
  params: {
    shortName: string,
  },
  query: {
    page?: string,
  }
};
type GetServerSideProps = {
  props: {
    pageTitle: string,
  } & CategoryProps,
};
export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSideProps> {
  if (context.query?.page) console.log(context.query?.page);
  const [err, discussions] = await getDiscussions(context.params?.shortName);
  const application = discussions[0].application;
  return {
    props: {
      pageTitle: application.name,
      discussions,
      application,
    },
  };
}

import getDiscussion from "../../../../models/server/getDiscussion";
import {
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { marked } from 'marked';
import { lolAssets } from "../../../../models/markdown";
import DiscussionContainer from '../../../../components/organisms/Discussion';
import Comments from '../../../../components/organisms/Comments';
import getComments from '../../../../models/server/getComments';
import { ReactElement } from 'react';
import { Discussion as DiscussionType, Comments as CommentsType, Platform } from '../../../../types/app';
import Breadcrumbs from '../../../../components/organisms/Breadcrumbs';
import NoComments from '../../../../components/organisms/NoComments';
import CommentsHeader from '../../../../components/organisms/CommentsHeader';

type DiscussionProps = {
  discussion: DiscussionType,
  comments: CommentsType,
};

export default function Discussion({ discussion, comments }: DiscussionProps): ReactElement {
  const router = useRouter();
  const platform: Platform = router.query.platform === 'na' ? 'na' : 'eu';
  marked.use({ extensions: [lolAssets] });
  return (
    <Flex direction='column' w='100%'>
      <Breadcrumbs pagePath={[
        { path: '/', name: 'Home' },
        { path: `/${platform}`, name: 'EU Boards' },
        { path: `/${platform}/c/${discussion.application.shortName}`, name: discussion.application.name },
        { path: `/${platform}/c/${discussion.application.shortName}/${discussion.id}`, name: discussion.title },
      ]}/>
      <Text as='h1'>{discussion.application.name}</Text>
      <VStack spacing={4}>
        <DiscussionContainer discussion={discussion} platform={platform} />
        <CommentsHeader count={comments.length}/>
        {comments.length
          ? <Comments comments={comments} />
          : <NoComments />}
      </VStack>
    </Flex>
  );
}

type GetServerSidePropsContext = {
  params: {
    shortName: string,
    discussionId: string,
  }
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const shortName = context.params?.shortName;
  const discussionId = context.params?.discussionId;
  const [err, discussion] = await getDiscussion(shortName, discussionId);
  const [err2, comments] =  await getComments(discussionId);
  return {
    props: {
      discussion,
      comments,
    }
  };
}

import getDiscussion from "../../../../models/server/getDiscussion";
import {
  Flex,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { marked } from 'marked';
import { lolAssets } from "../../../../models/markdown";
import DiscussionContainer from '../../../../components/organisms/Discussion';
import Comments from '../../../../components/organisms/Comments';
import getComments from '../../../../models/server/getComments';
import { ReactElement } from 'react';
import { Discussion as DiscussionType, Comments as CommentsType } from '../../../../types/app';

type DiscussionProps = {
  discussion: DiscussionType,
  comments: CommentsType,
};

export default function Discussion({ discussion, comments }: DiscussionProps): ReactElement {
  const router = useRouter();
  const platform = router.query.platform;
  marked.use({ extensions: [lolAssets] });

  return (
    <Flex direction='column' w='100%' gap='15px'>
      <Text as='h1'>{discussion.application.name}</Text>
      <DiscussionContainer discussion={discussion} platform={platform} />
      <Comments comments={comments} />
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
  console.log(comments);
  return {
    props: {
      discussion,
      comments,
    }
  };
}

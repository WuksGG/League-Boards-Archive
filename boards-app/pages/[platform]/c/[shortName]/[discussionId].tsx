import getDiscussion from "../../../../models/server/getDiscussion";
import {
  Flex,
  Text,
  Divider,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import TimeAgo from 'react-timeago';
import { useRouter } from 'next/router';
import { marked } from 'marked';
import { lolAssets } from "../../../../models/markdown";
import DiscussionContainer from '../../../../components/organisms/Discussion';
import { CommentsDisabled } from "@mui/icons-material";
import Comments from '../../../../components/organisms/Comments';
import getComments from '../../../../models/server/getComments';

export default function Discussion({ discussion, comments }) {
  const router = useRouter();
  const { platform } = router.query;
  marked.use({ extensions: [lolAssets] });

  return (
    <Flex direction='column' w='100%' gap='15px'>
      <Text as='h1'>{discussion.application.name}</Text>
      <DiscussionContainer discussion={discussion} platform={platform} />
      <Comments comments={comments} />
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const shortName = context.params.shortName;
  const discussionId = context.params.discussionId;
  const [err, discussion] = await getDiscussion(shortName, discussionId);
  const [err2, comments] =  await getComments(discussionId);
  return {
    props: {
      discussion,
      comments,
    }
  };
}

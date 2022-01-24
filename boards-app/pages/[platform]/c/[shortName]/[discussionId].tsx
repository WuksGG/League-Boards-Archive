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

export default function Discussion({ discussion }) {
  const router = useRouter();
  const { platform } = router.query;
  marked.use({ extensions: [lolAssets] });
  const markdown = marked.parse(discussion.content.body);
  return (
    <Flex direction='column' w='100%'>
      <Text as='h1'>{discussion.application.name}</Text>
        <Flex
          bg='#303030'
          w='100%'
          border='1px solid #545454'
          p='40px'
          direction='column'
        >
          <Text as='h2' mb='5px'>{discussion.title}</Text>
          <Flex align='center' gap='8px'>
            <Flex position='relative' h='25px' w='25px'>
              <Image alt='Profile Icon' src={`https://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${discussion.user.profileIcon}.png`} layout='fill' objectFit='contain' />
            </Flex>
            <Text fontSize='13px' as='span'>
              {discussion.user.name} ({discussion.user.realm}) submitted <TimeAgo date={discussion.dates.createdAt} /> in <NextLink href={`/${platform}/c/${discussion.application.shortName}`}>{discussion.application.name}</NextLink>
              </Text>
          </Flex>
          <Divider />
          <Flex>
            <div dangerouslySetInnerHTML={{__html: markdown}}/>
          </Flex>
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const shortName = context.params.shortName;
  const discussionId = context.params.discussionId;
  const [err, result] = await getDiscussion(shortName, discussionId);
  console.log(result);
  return {
    props: {
      discussion: result,
    }
  };
}

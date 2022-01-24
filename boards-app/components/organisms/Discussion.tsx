import {
  Text,
  Flex,
  Divider,
} from '@chakra-ui/react';
import Image from 'next/image';
import { ReactElement } from 'react';
import { marked } from 'marked';
import NextLink from 'next/link';
import TimeAgo from 'react-timeago';

export default function DiscussionContainer({ discussion, platform }): ReactElement {
  const markdown = marked.parse(discussion.content.body);
  return (
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
  );
}

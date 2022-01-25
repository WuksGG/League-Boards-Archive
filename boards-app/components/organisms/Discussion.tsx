import {
  Text,
  Flex,
  Divider,
  Link,
} from '@chakra-ui/react';
import Image from 'next/image';
import { ReactElement } from 'react';
import { marked } from 'marked';
import NextLink from 'next/link';
import TimeAgo from 'react-timeago';
import type { Platform, Discussion } from '../../types/app';

type DiscussionContainerProps = {
  discussion: Discussion,
  platform: Platform,
};

export default function DiscussionContainer({ discussion, platform }: DiscussionContainerProps): ReactElement {
  const markdown = marked.parse(discussion.content.body);
  return (
    <Flex
      bg='#303030'
      w='100%'
      border='1px solid #545454'
      p='40px'
      direction='column'
    >
      <Text as='h2' mb='5px' mt='0px'>{discussion.title}</Text>
      <Flex align='center' gap='8px'>
        <Flex position='relative' h='25px' w='25px'>
          <Image alt='Profile Icon' src={`https://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${discussion.user.profileIcon}.png`} layout='fill' objectFit='contain' />
        </Flex>
        <Text fontSize='13px' as='span'>
          <NextLink href='/'>
            <Link color='#fff0b7'>{discussion.user.name}</Link>
          </NextLink> ({discussion.user.realm}) submitted <TimeAgo date={discussion.dates.createdAt} /> in&nbsp;
          <NextLink href={`/${platform}/c/${discussion.application.shortName}`}>
            <Link color='#fff0b7'>{discussion.application.name}</Link>
          </NextLink>
        </Text>
      </Flex>
      <Divider />
      <Flex>
        <div dangerouslySetInnerHTML={{__html: markdown}}/>
      </Flex>
    </Flex>
  );
}

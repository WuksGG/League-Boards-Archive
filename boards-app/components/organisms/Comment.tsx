import {
  Flex,
  Text,
} from '@chakra-ui/react';
import { marked } from 'marked';
import TimeAgo from 'react-timeago';
import Image from 'next/image';
import { ReactElement } from 'react';
import type { Comment as CommentType }  from '../../types/app';

type CommentProps = {
  comment: CommentType,
}

export default function Comment({ comment }: CommentProps): ReactElement {
  const markdown = marked.parse(comment.message);
  return (
    <Flex
      bg='#383838'
      w='100%'
      p='20px 40px'
      direction='column'
      border='1px solid #464646'
    >
      <Flex gap='6px'>
        <Flex position='relative' h='25px' w='25px'>
          <Image alt='Profile Icon' src={`https://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${comment.user.profileIcon}.png`} layout='fill' objectFit='contain' />
        </Flex>
        <Text as='span'><Text fontWeight='bold' as='span'>{comment.user.name}</Text> ({comment.user.realm}) <Text as='span' fontSize='13px'>- <TimeAgo date={comment.dates.createdAt}/></Text></Text>
      </Flex>
      <div dangerouslySetInnerHTML={{__html: markdown}}/>
    </Flex>
  );
}

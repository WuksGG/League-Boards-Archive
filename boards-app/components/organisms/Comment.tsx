import {
  Flex,
  Text,
} from '@chakra-ui/react';
import { marked } from 'marked';
import TimeAgo from 'react-timeago';
import Image from 'next/image';

export default function Comment({ comment }) {
  const markdown = marked.parse(comment.message);
  return (
    <Flex
      bg='#5c5c5c'
      w='100%'
      p='40px'
      direction='column'
      border='1px solid #838383'
    >
      <Flex gap='6px'>
        <Flex position='relative' h='25px' w='25px'>
          <Image alt='Profile Icon' src={`https://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${comment.user.profileIcon}.png`} layout='fill' objectFit='contain' />
        </Flex>
        <Text as='span'><Text fontWeight='bold' as='span'>{comment.user.name}</Text> ({comment.user.realm}) <Text as='span' fontSize='13px'>- <TimeAgo date={comment.dates.createdAt}/></Text></Text>
      </Flex>
      <div dangerouslySetInnerHTML={{__html: markdown}}/>
    </Flex>
  )
}

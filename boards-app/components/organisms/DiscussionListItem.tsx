import {
  Flex,
  Text,
  HStack,
  Link,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import TimeAgo from 'react-timeago';

export default function DiscussionListItem({ data }) {
  const router = useRouter();
  const { platform, shortName } = router.query;
  const createdAt = new Date(data.dates.createdAt);
  return (
    <HStack w='100%' bg='#474747'>
      <Flex
        direction='column'
        align='center'
        sx={{ flex: '1 0 50px' }}
        p='5px'
      >
        <Text as='span'>{data.upvotes}</Text>
        <Text as='span' fontSize='11px'>votes</Text>
      </Flex>
      <Flex sx={{ flex: '1 1 100%' }} direction='column' py='5px'>
        <NextLink href={`/${platform}/c/${shortName}/${data.id}`}>
          <Text
            fontWeight='bold'
            as='span'
            cursor='pointer'
          >{data.title}</Text>
        </NextLink>
        <Text fontSize='13px' as='span'>by {data.user.name} ({data.user.realm}) in {data.application.name} <TimeAgo date={data.dates.createdAt} /></Text>
      </Flex>
      <Flex
        direction='column'
        align='center'
        sx={{ flex: '1 0 50px' }}
        p='5px'
      >
        <Text as='span'>{data.viewcount}</Text>
        <Text as='span' fontSize='11px'>views</Text>
      </Flex>
      <Flex
        direction='column'
        align='center'
        sx={{ flex: '1 0 50px' }}
        p='5px'
      >
        <Text as='span'>{data.softcomments}</Text>
        <Text as='span' fontSize='11px'>comments</Text>
      </Flex>
    </HStack>
  );
}

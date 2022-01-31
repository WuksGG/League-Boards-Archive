import {
  Flex,
  Text,
  HStack,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import TimeAgo from 'react-timeago';
import type { ReactElement } from 'react';
import type { Discussion } from '../../types/app';
import roundNumber from '../../utils/roundNumber';

type DiscussionListItemProps = {
  data: Discussion,
};

export default function DiscussionListItem({ data }: DiscussionListItemProps): ReactElement {
  const router = useRouter();
  const { platform, shortName } = router.query;
  return (
    <HStack w='100%' bg='#363636'>
      <Flex
        direction='column'
        align='center'
        sx={{ flex: '1 0 50px' }}
        p='5px'
      >
        <Text as='span'>{roundNumber(data.upvotes - data.downvotes)}</Text>
        <Text as='span' fontSize='11px'>votes</Text>
      </Flex>
      <Flex sx={{ flex: '1 1 100%' }} direction='column' py='5px'>
        <NextLink href={`/${platform}/c/${shortName}/${data.id}`} passHref>
          <Link>
            <Text
              fontWeight='bold'
              as='span'
              cursor='pointer'
              color='#e8e8e8'
            >
              {data.title}
            </Text>
          </Link>
        </NextLink>
        <Text
          fontSize='12px'
          as='span'
          color='#dedede'
        >
          {data.user && (
            <Text as='span'>by&nbsp;
            <NextLink href='/' passHref>
              <Link color='#fff0b7'>
                {data.user.name}
              </Link>
            </NextLink>
            &nbsp;({data.user.realm}) in&nbsp;
            </Text>
          )}
          <NextLink href='/' passHref>
            <Link color='#fff0b7'>{data.application.name}</Link>
          </NextLink>&nbsp;
          <TimeAgo date={data.dates.createdAt} />
        </Text>
      </Flex>
      <Flex
        direction='column'
        align='center'
        sx={{ flex: '1 0 50px' }}
        p='5px'
      >
        <Text as='span'>{roundNumber(data.softcomments)}</Text>
        <Text as='span' fontSize='11px'>Comments</Text>
      </Flex>
      <Flex
        direction='column'
        align='center'
        sx={{ flex: '1 0 60px' }}
        p='5px'
      >
        <Text as='span'>{roundNumber(data.viewcount)}</Text>
        <Text as='span' fontSize='11px'>Views</Text>
      </Flex>
    </HStack>
  );
}

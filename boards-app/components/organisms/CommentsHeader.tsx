import { ReactElement } from "react";
import {
  Flex,
  Divider,
  Text,
  Link,
} from '@chakra-ui/react';

type Props = {
  count: number,
}
export default function CommentsHeader({ count }: Props): ReactElement {
  return (
    <Flex
      w='100%'
      bg='#4e4e4e'
      p='20px 40px'
      border='1px solid #686868'
      direction='column'
    >
      <Flex justify='space-between'>
        <Flex gap='10px' align='flex-end'>
          <Text as='h3' m='0'>Discuss</Text>
          <Text as='span' mb='2px' fontSize='12px'>
            {count === 1 ? '1 comment' : (count + ' comments')}
          </Text>
        </Flex>
        <Flex fontSize='12px' align='flex-end' gap='8px'>
          <Text as='span'>Sort comments by:</Text>
          <Link color='#fff0b7'>Best</Link>
          <Link color='#fff0b7'>New</Link>
        </Flex>
      </Flex>
      <Divider />
      <Flex>
        <Link
          color='#fff0b7'
          textTransform='uppercase'
          fontSize='12px'
        >Switch to Chronological View</Link>
      </Flex>
    </Flex>
  );
}

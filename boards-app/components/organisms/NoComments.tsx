import type { ReactElement } from 'react';
import {
  Flex,
  Text,
} from '@chakra-ui/react';

export default function NoComments(): ReactElement {
  return (
    <Flex w='100%' bg='#6c1d1d' p='10px 40px' border='1px solid #902a2a'>
      <Text>It seems like no one has joined the discussion.</Text>
    </Flex>
  );
}

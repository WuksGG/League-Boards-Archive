import Image from 'next/image';
import { HStack, Flex, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Logo() {
  return (
    <HStack
      py='5px'
      sx={{
        userSelect: 'none'
      }}
    >
      <NextLink href='/' passHref>
        <a>
          <HStack>
            <Image
              src='/assets/images/logo.png'
              alt='Runeterra.net Logo'
              height={40}
              width={40}
            />
            <Text fontWeight={700}>League Boards Archive</Text>
          </HStack>
        </a>
      </NextLink>
    </HStack>
  );
}
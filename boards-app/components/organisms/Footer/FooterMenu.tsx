import type { ReactElement } from 'react';
import NextLink from 'next/link';
import { Flex, HStack, Link } from '@chakra-ui/react';

function FooterMenu(): ReactElement {
  return (
    <HStack spacing={12}>
      <NextLink href='/terms'>Terms of Use</NextLink>
      <Link
        rel='noreferrer'
        href='https://github.com/WuksGG/League-Boards-Archive'
        isExternal
      >GitHub</Link>
      <NextLink href='/privacy'>Privacy Policy</NextLink>
    </HStack>
  );
}

export default FooterMenu;

import { ReactElement } from 'react';
import Link from 'next/link';
import { Flex, HStack } from '@chakra-ui/react';

function FooterMenu(): ReactElement {
  return (
    <HStack spacing={12}>
      <Link href='/terms'>Terms of Use</Link>
      <a
        rel='noreferrer'
        href='https://github.com/WuksGG/League-Boards-Archive'
        target='_blank'
      >
        GitHub
      </a>
      <Link href='/privacy'>Privacy Policy</Link>
    </HStack>
  );
}

export default FooterMenu;

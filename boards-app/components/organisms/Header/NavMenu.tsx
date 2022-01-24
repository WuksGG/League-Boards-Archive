import {
  Flex,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

export default function NavMenu(): ReactElement {
  // const router = useRouter();
  // console.log(router);
  return (
    <HStack spacing={8}>
      <Link href='/categories'>Categories</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/about'>About</Link>
    </HStack>
  );
}

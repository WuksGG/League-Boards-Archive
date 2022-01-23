import {
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function NavMenu() {
  return (
    <Flex>
      <Link href='/contact'>Contact</Link>
      <Link href='/categories'>Categories</Link>
      <Link href='/about'>About</Link>
    </Flex>
  )
}

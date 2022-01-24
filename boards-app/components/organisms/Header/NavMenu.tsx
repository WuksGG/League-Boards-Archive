import {
  Flex,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

export default function NavMenu(): ReactElement {
  const router = useRouter();
  let realm: string | null = router.asPath.split('/')[1];
  if (['na', 'eu'].indexOf(realm) < 0) {
    realm = 'eu';
  }
  return (
    <HStack spacing={8}>
      <Link href={`/${realm}`}>Categories</Link>
      <Link href={`/contact`}>Contact</Link>
      <Link href={`/about`}>About</Link>
    </HStack>
  );
}

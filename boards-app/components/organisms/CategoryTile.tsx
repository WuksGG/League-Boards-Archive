import {
  Flex,
  GridItem,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactElement } from 'react';
import { Category, Platform } from '../../types/app';

type CategoryTileProps = {
  category: Category,
  platform: Platform,
};

export default function CategoryTile({ platform, category }: CategoryTileProps): ReactElement {
  return (
    <NextLink
      href={`/${platform}/c/${category.shortname}`}
    >
      <GridItem
        w='100%'
        colSpan={1}
        bg='dark.500'
        cursor='pointer'
        align='center'
      >
        <Text fontWeight='600'>{category.name}</Text>
      </GridItem>
    </NextLink>
  );
}

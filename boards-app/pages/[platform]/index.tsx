import {
  Text,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactElement } from 'react';
import getCategories from '../../models/server/getCategories';

export default function Categories({ categories, platform }): ReactElement {
  console.log(categories);
  return (
    <Flex direction='column' w='100%'>
      <Text as='h1'>Categories</Text>
      <Grid templateColumns='repeat(4, 1fr)' gap={4}>
        {categories.map((category) => {
          return (
            <NextLink
              href={`/${platform}/c/${category.shortname}`}
              key={category.id}
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
        })}
      </Grid>
    </Flex>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { platform: 'na' } },
      { params: { platform: 'eu' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const platform = context.params.platform;
  const [err, categories] = await getCategories(platform);
  return {
    props: {
      pageTitle: 'Categories',
      categories,
      platform,
    },
  };
}

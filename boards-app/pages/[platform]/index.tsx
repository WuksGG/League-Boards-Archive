import {
  Text,
  Flex,
  Grid,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import getCategories from '../../models/server/getCategories';
import CategoryTile from '../../components/organisms/CategoryTile';
import { Categories as CategoriesType, Platform } from '../../types/app';

type CategoriesProps = {
  categories: CategoriesType,
  platform: Platform,
};

export default function Categories({ categories, platform }: CategoriesProps): ReactElement {
  return (
    <Flex direction='column' w='100%'>
      <Text as='h1'>Categories</Text>
      <Grid templateColumns='repeat(4, 1fr)' gap={4}>
        {categories.map((category) => {
          return (
            <CategoryTile key={category.id} platform={platform} category={category} />
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

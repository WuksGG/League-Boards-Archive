import {
  Text,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

export default function Categories(): ReactElement {
  return (
    <Flex direction='column'>
      <Text as='h1'>Categories</Text>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' h='10' bg='dark.500' />
        <GridItem w='100%' h='10' bg='dark.500' />
        <GridItem w='100%' h='10' bg='dark.500' />
        <GridItem w='100%' h='10' bg='dark.500' />
        <GridItem w='100%' h='10' bg='dark.500' />
        <GridItem w='100%' h='10' bg='dark.500' />
        <GridItem w='100%' h='10' bg='dark.500' />
        <GridItem w='100%' h='10' bg='dark.500' />
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
  return {
    props: {
      pageTitle: 'Categories',
    },
  };
}

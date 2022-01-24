import {
  Text,
  Flex,
} from '@chakra-ui/react';

export default function Categories() {
  return (
    <Flex direction='column'>
      <Text as='h1'>Categories</Text>
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

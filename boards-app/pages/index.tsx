import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import NextLink from 'next/link';
import {
  Flex,
  Text,
} from '@chakra-ui/react';
import type { ReactElement } from 'react';

function Home(): ReactElement {
  return (
    <Flex direction='column' w='100%'>
      <Text as='h1'>Select Your Region</Text>
      <Flex h='200px' gap='20px' w='100%' userSelect='none'>
        <NextLink href='/na'>
          <Flex
            sx={{
              flex: 2,
              '&:hover': {
                flex: 3,
              },
              transition: 'flex 0.3s',
            }}
            align='center'
            position='relative'
            cursor='pointer'
          >
            <Image src='/assets/images/worlds_na.jpeg' alt='Worlds NA' layout='fill' objectFit='cover' />
          </Flex>
        </NextLink>
        <NextLink href='/eu'>
          <Flex
            sx={{
              flex: 2,
              '&:hover': {
                flex: 3,
              },
              transition: 'flex 0.3s',
            }}
            justify='flex-end'
            align='center'
            position='relative'
            cursor='pointer'
          >
            <Image src='/assets/images/worlds_eu.jpeg' alt='Worlds EU' layout='fill' objectFit='cover' />
          </Flex>
        </NextLink>
      </Flex>
      <Text>* Europe support only at the moment. Additional regional support coming soon.</Text>
    </Flex>
  );
}

export default Home;

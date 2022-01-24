import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  useColorMode,
  Flex,
  HStack,
  Text,
} from '@chakra-ui/react';

function Home() {
  const { colorMode } = useColorMode();
  return (
    <Flex h='100px' gap='20px' w='100%'>
      {/* <Flex> */}
        <Flex
          sx={{
            flex: 1,
            '&:hover': {
              flex: 2,
            },
            transition: 'flex 0.3s',
          }}
          bg='red'
          align='center'
          position='relative'
        >
          <Text px='20px'>North America</Text>
          <Image src='/assets/images/worlds_na.jpeg' alt='Worlds NA' layout='fill' objectFit='contain' />
        </Flex>
        <Flex
          sx={{
            flex: 1,
            '&:hover': {
              flex: 2,
            },
            transition: 'flex 0.3s',
          }}
          justify='flex-end'
          bg='blue'
          align='center'
          position='relative'
        >
          <Text px='20px'>Europe</Text>
          <Image src='/assets/images/worlds_eu.jpeg' alt='Worlds EU' layout='fill' objectFit='contain' />
        </Flex>
      {/* </Flex> */}
    </Flex>
  );
}

export default Home;

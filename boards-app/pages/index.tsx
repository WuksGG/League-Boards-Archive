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
        <Flex sx={{ flex: 1 }} bg='red' align='center'>
          <Text px='20px'>North America</Text>
        </Flex>
        <Flex sx={{ flex: 1 }} justify='flex-end' bg='blue' align='center'>
          <Text px='20px'>Europe</Text>
        </Flex>
      {/* </Flex> */}
    </Flex>
  );
}

export default Home;

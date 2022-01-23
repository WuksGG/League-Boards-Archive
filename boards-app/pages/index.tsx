import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useColorMode } from '@chakra-ui/react';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  return (
    <div>{colorMode}</div>
  )
}

export default Home;

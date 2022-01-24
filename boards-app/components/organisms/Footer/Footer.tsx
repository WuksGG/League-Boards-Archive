import ContentContainer from '../../templates/ContentContainer';
import { Text, VStack, Divider } from '@chakra-ui/react';
import FooterMenu from './FooterMenu';
import type { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <ContentContainer bg='#ae2e2e'>
      <VStack direction='column' p='20px 0'>
        <FooterMenu />
        <Text align='center'>Copyright &copy; 2022 Michael Chan, Runeterra.net. League of Legends is a registered trademark and copyright of Riot Games, Inc. This project is not affiliated with Riot Games in any way.</Text>
      </VStack>
    </ContentContainer>
  );
}

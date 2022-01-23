import Header from '../organisms/Header/Header';
import Footer from '../organisms/Footer/Footer';
import { ReactElement } from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import ContentContainer from './ContentContainer';

export default function Layout({ children }): ReactElement {
  return (
    <Flex direction='column' justify='space-between' w='100vw'>
      <Header />
      <ContentContainer bg='#252524' flex={1}>
        {children}
      </ContentContainer>
      <Footer />
    </Flex>
  );
}

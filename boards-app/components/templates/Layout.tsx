import { ReactElement, ReactFragment } from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import Header from '../organisms/Header/Header';
import Footer from '../organisms/Footer/Footer';
import ContentContainer from './ContentContainer';

type Props = {
  children: ReactFragment,
};

export default function Layout({ children }: Props): ReactElement {
  return (
    <Flex direction='column' justify='space-between' w='100vw'>
      <Header />
      <ContentContainer bg='#252524' flex={1}>
        <Flex mt='20px' w='100%' mb='20px'>
          {children}
        </Flex>
      </ContentContainer>
      <Footer />
    </Flex>
  );
}

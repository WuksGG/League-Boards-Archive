import { ReactElement } from 'react';
import ContentContainer from '../../templates/ContentContainer';
import Logo from '../../molecules/Logo';
import { Flex, Text, HStack } from '@chakra-ui/react';
import NavMenu from './NavMenu';

/**
 *
 * @returns
 */
function Header(): ReactElement {
  return (
    <ContentContainer bg='#ae2e2e'>
      <HStack w='100%' justify='space-between'>
        <Flex>
          <Logo />
        </Flex>
        <Flex>
          <NavMenu />
        </Flex>
      </HStack>
    </ContentContainer>
  );
}

export default Header;
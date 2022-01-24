import { ReactElement, ReactFragment } from 'react';
import {
  Flex,
} from '@chakra-ui/react';

type ContentContainerType = {
  children: ReactFragment,
  bg: string,
  flex?: number | string,
};

/**
 *
 * @param { ReactFragment } children - Children that should be padded inwards
 * @param bg - Background color of the element
 * according to max width and breakpoints
 * @returns { ReactElement }
 */
function ContentContainer({ children, bg, flex }: ContentContainerType): ReactElement {
  return (
    <Flex
      bg={bg}
      sx={{ flex: flex }}
      justify='center'
    >
      <Flex w={['500px', '1060px']}>
        {children}
      </Flex>
    </Flex>
  );
}

export default ContentContainer;

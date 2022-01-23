import { ReactElement, ReactFragment } from 'react';
import {
  Flex,
} from '@chakra-ui/react';

/**
 *
 * @param { ReactFragment } children - Children that should be padded inwards
 * according to max width and breakpoints
 * @returns A React Element
 */

type ContentContainerType = {
  children: ReactFragment,
};

export default function ContentContainer({ children }: ContentContainerType): ReactElement {
  return (
    <Flex>
      <Flex>
        {children}
      </Flex>
    </Flex>
  );
}

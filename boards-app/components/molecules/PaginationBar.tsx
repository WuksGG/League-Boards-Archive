import {
  IconButton,
  Flex,
  Button,
} from '@chakra-ui/react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import type { ReactElement } from 'react';

type PaginationBarProps = {

};

function PageButton({value}) {
  return (
    <Button fontWeight='500' fontSize='13px' color='#fff'>{value}</Button>
  );
}

function PaginationBar(props: PaginationBarProps): ReactElement {
  return (
    <Flex gap='5px' justify='flex-end' mt='10px'>
      <IconButton
        aria-label='First page'
        icon={<ArrowLeftIcon />}
        color='#fff'
        fontSize='10px'
        focusable={true}
      />
      <IconButton
        aria-label='Previous page'
        icon={<ChevronLeftIcon />}
        color='#fff'
      />
      <PageButton value='1' />
      <PageButton value='2' />
      <PageButton value='3' />
      <PageButton value='4' />
      <PageButton value='5' />
      <IconButton
        aria-label='Next page'
        icon={<ChevronRightIcon />}
        color='#fff'
      />
      <IconButton
        aria-label='First page'
        icon={<ArrowRightIcon />}
        color='#fff'
        fontSize='10px'
      />
    </Flex>
  );
}

export default PaginationBar;
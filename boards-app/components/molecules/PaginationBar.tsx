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


type PageButtonProps = {
  value: string | number,
  isActive?: boolean,
};
function PageButton({value, isActive}: PageButtonProps) {
  return (
    <Button
      borderRadius='1px'
      borderWidth='1px'
      borderStyle='solid'
      fontWeight='500'
      fontSize='13px'
      color='#fff'
      isActive={isActive}
    >{value}</Button>
  );
}

type PaginationBarProps = {

};
function PaginationBar(props: PaginationBarProps): ReactElement {
  return (
    <Flex
      gap='12px'
      justify='flex-end'
      mt='10px'
      sx={{
        '& button': {
          cursor: 'pointer',
          border: '1px solid #4e4e4e',
          color: '#fff',
          borderRadius: '1px',
        },
      }}
    >
      <Flex gap='4px'>
        <IconButton
          aria-label='First page'
          icon={<ArrowLeftIcon />}
          color='#fff'
          fontSize='9px'
          isDisabled
        />
        <IconButton
          aria-label='Previous page'
          icon={<ChevronLeftIcon />}
          isDisabled
        />
      </Flex>
      <Flex
        gap='5px'
      >
        <PageButton value='1' />
        <PageButton value='2' isActive />
        <PageButton value='3' />
        <PageButton value='4' />
        <PageButton value='5' />
      </Flex>
      <Flex gap='4px'>
        <IconButton
          aria-label='Next page'
          icon={<ChevronRightIcon />}
        />
        <IconButton
          aria-label='First page'
          icon={<ArrowRightIcon />}
          fontSize='9px'
        />
      </Flex>
    </Flex>
  );
}

export default PaginationBar;
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
        '& > button': {
          cursor: 'pointer',
        },
      }}
    >
      <IconButton
        aria-label='First page'
        icon={<ArrowLeftIcon />}
        color='#fff'
        fontSize='9px'
        borderRadius='1px'
        borderWidth='1px'
        isDisabled
      />
      <IconButton
        aria-label='Previous page'
        icon={<ChevronLeftIcon />}
        color='#fff'
        borderRadius='1px'
        borderWidth='1px'
        isDisabled
      />
      <Flex
        gap='5px'
        sx={{
          '& > button': {
            cursor: 'pointer',
          },
        }}
      >
        <PageButton value='1' />
        <PageButton value='2' isActive />
        <PageButton value='3' />
        <PageButton value='4' />
        <PageButton value='5' />
      </Flex>
      <IconButton
        aria-label='Next page'
        icon={<ChevronRightIcon />}
        color='#fff'
        borderRadius='1px'
        borderWidth='1px'
      />
      <IconButton
        aria-label='First page'
        icon={<ArrowRightIcon />}
        color='#fff'
        fontSize='9px'
        borderRadius='1px'
        borderWidth='1px'
      />
    </Flex>
  );
}

export default PaginationBar;